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
  bMonthlyRepayment?: number,
): {
  basicMonthlyRepayment: number;
  monthlyRepayment: number;
} {
  const basicMonthlyRepayment = bMonthlyRepayment ? bMonthlyRepayment : +(creditSum / creditTimeInMonths).toFixed(2);

  const monthlyAddedPercentSum = getMonthlyAddedPercent(creditSum, interestRate);

  return { basicMonthlyRepayment, monthlyRepayment: +(basicMonthlyRepayment + monthlyAddedPercentSum).toFixed(2) };
}

function getTimeToRepayCreditTable({
  table = { items: [], headers } as unknown as Table<CalculationHeaders>,
  creditSum,
  creditTimeInMonths,
  interestRate,
  minManualPayment,
  bMonthlyRepayment,
}: {
  creditSum: number;
  creditTimeInMonths: number;
  interestRate: number;
  minManualPayment: number;
  bMonthlyRepayment?: number;
  table?: Table<CalculationHeaders>;
}): Table<CalculationHeaders> {
  const { basicMonthlyRepayment, monthlyRepayment } = getMonthlyRepayAmount(
    creditSum,
    creditTimeInMonths,
    interestRate,
    bMonthlyRepayment,
  );

  if ((typeof minManualPayment === 'number' && creditSum > minManualPayment) || creditSum > basicMonthlyRepayment) {
    const toRepay =
      !!minManualPayment && minManualPayment >= monthlyRepayment ? minManualPayment : basicMonthlyRepayment;

    const creditSumAfterPayment = creditSum + getMonthlyAddedPercent(creditSum, interestRate) - toRepay;
    const creditSumAfterPaymentNormalized = +(creditSumAfterPayment > 0 ? creditSumAfterPayment : 0).toFixed(2);

    if (creditSumAfterPaymentNormalized === 0) return table;

    table.items.push({
      creditSum: creditSumAfterPaymentNormalized,
      amountToRepay: creditSumAfterPaymentNormalized < toRepay ? creditSumAfterPaymentNormalized : toRepay,
      generalPayment:
        creditSumAfterPaymentNormalized < toRepay ? creditSumAfterPaymentNormalized : basicMonthlyRepayment,
    });

    return getTimeToRepayCreditTable({
      table,
      creditSum: creditSumAfterPaymentNormalized,
      creditTimeInMonths,
      interestRate,
      minManualPayment,
      bMonthlyRepayment: basicMonthlyRepayment,
    });
  } else {
    return table;
  }
}
