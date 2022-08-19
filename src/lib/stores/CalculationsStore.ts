import type { Table, TableItem } from '@components/Table';
import { writable } from 'svelte/store';

const headers = ['creditSum', 'amountToRepay', 'generalPayment'] as const;

export type CalculationHeaders = typeof headers[number];

export const calculations = writable(null);

export function makeCalculations(creditSum, creditTimeInMonths, interestRate, minManualPayment) {
  const annuityPayment = getAnnuityPayment(creditSum, interestRate, creditTimeInMonths);

  const tableData = getTimeToRepayCreditTable({
    creditSum,
    creditTimeInMonths,
    interestRate,
    annuityPayment,
    minManualPayment,
  });

  calculations.set(tableData);
}

export function resetCalculations() {
  calculations.set(null);
}

function getAnnuityPayment(sum: number, interestRate: number, creditTimeInMonths: number): number {
  const irPerMonth = interestRate / 100 / 12;
  return +(
    sum *
    ((irPerMonth * Math.pow(1 + irPerMonth, creditTimeInMonths)) / (Math.pow(1 + irPerMonth, creditTimeInMonths) - 1))
  ).toFixed(2);
}

function getMonthlyAddedPercent(sum: number, interestRate: number): number {
  return ((sum / 100) * interestRate) / 12;
}

function getTimeToRepayCreditTable({
  table = { items: [], headers } as unknown as Table<CalculationHeaders>,
  creditSum,
  creditTimeInMonths,
  interestRate,
  minManualPayment,
  annuityPayment,
}: {
  creditSum: number;
  creditTimeInMonths: number;
  interestRate: number;
  minManualPayment: number;
  annuityPayment: number;
  table?: Table<CalculationHeaders>;
}): Table<CalculationHeaders> {
  if ((typeof minManualPayment === 'number' && creditSum > minManualPayment) || creditSum > annuityPayment) {
    const toRepay = !!minManualPayment && minManualPayment >= annuityPayment ? minManualPayment : annuityPayment;

    const creditSumAfterPayment =
      creditSum + getMonthlyAddedPercent(creditSum, interestRate) - (minManualPayment ?? toRepay);

    const creditSumAfterPaymentNormalized = +(creditSumAfterPayment > 0 ? creditSumAfterPayment : 0).toFixed(2);

    if (creditSumAfterPaymentNormalized === 0) return table;

    table.items.push({
      creditSum: creditSumAfterPaymentNormalized,
      amountToRepay: creditSumAfterPaymentNormalized < toRepay ? creditSumAfterPaymentNormalized : toRepay,
      generalPayment: creditSumAfterPaymentNormalized < toRepay ? creditSumAfterPaymentNormalized : annuityPayment,
    });

    return getTimeToRepayCreditTable({
      table,
      creditSum: creditSumAfterPaymentNormalized,
      creditTimeInMonths: creditTimeInMonths - 1,
      interestRate,
      minManualPayment,
      annuityPayment,
    });
  } else {
    return table;
  }
}
