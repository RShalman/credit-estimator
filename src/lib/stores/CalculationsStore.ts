import type { Table, TableItem } from '@components/Table';
import { writable } from 'svelte/store';

const headers = ['creditSum', 'amountToRepay', 'generalPayment'] as const;

export type CalculationHeaders = typeof headers[number];

export const calculations = writable(null);

export function makeCalculations(creditSum, creditTimeInMonths, interestRate, minManualPayment) {
  const tableData = getTimeToRepayCreditTable({
    creditSum,
    creditTimeInMonths,
    interestRate,
    minManualPayment,
  });

  calculations.set(tableData);
}

export function resetCalculations() {
  calculations.set(null);
}

function getMonthlyAddedPercent(sum: number, interestRate: number): number {
  return ((sum / 100) * interestRate) / 12;
}

function getMonthlyRepayAmount(
  creditSum: number,
  creditTimeInMonths: number,
  interestRate: number,
): {
  basicMonthlyRepayment: number;
  monthlyRepayment: number;
} {
  const basicMonthlyRepayment = +(creditSum / creditTimeInMonths).toFixed(2);
  const monthlyAddedPercentSum = getMonthlyAddedPercent(creditSum, interestRate);

  return { basicMonthlyRepayment, monthlyRepayment: +(basicMonthlyRepayment + monthlyAddedPercentSum).toFixed(2) };
}

function getTimeToRepayCreditTable({
  table = { items: [], headers } as unknown as Table<CalculationHeaders>,
  creditSum,
  creditTimeInMonths,
  interestRate,
  minManualPayment,
}: {
  creditSum: number;
  creditTimeInMonths: number;
  interestRate: number;
  minManualPayment: number;
  table?: Table<CalculationHeaders>;
}): Table<CalculationHeaders> {
  if (creditSum > 100) {
    const { basicMonthlyRepayment, monthlyRepayment } = getMonthlyRepayAmount(
      creditSum,
      creditTimeInMonths,
      interestRate,
    );

    const toRepay = minManualPayment && minManualPayment >= monthlyRepayment ? minManualPayment : monthlyRepayment;

    const creditSumAfterPayment = +(creditSum + getMonthlyAddedPercent(creditSum, interestRate) - toRepay).toFixed(2);

    table.items.push({
      creditSum: creditSumAfterPayment,
      amountToRepay: toRepay,
      generalPayment: basicMonthlyRepayment,
    });

    return getTimeToRepayCreditTable({
      table,
      creditSum: creditSumAfterPayment,
      creditTimeInMonths,
      interestRate,
      minManualPayment,
    });
  } else {
    return table;
  }
}
