import { AppForm, isAppFormValid } from '@components/stores/FormStore';
import type { FormFieldNames, IForm } from '@components/stores/FormStore';
import { get, writable } from 'svelte/store';

export type Table<H extends string | number> = {
  headers: H[];
  items: TableItem<H>[];
};

export type TableItem<I extends string | number> = Record<I, string | number>;

const headers = ['creditSum', 'amountToRepay', 'generalPayment'] as const;

export type CalculationHeaders = typeof headers[number];

export const calculations = writable(null);

export function submit() {
  const { creditSum, creditTimeInMonths, interestRate, minManualPayment } = get(AppForm).reduce(
    (acc, cur) => ({
      ...acc,
      [cur.name]: cur.value,
    }),
    {} as Record<FormFieldNames, IForm[number]['value']>,
  );

  makeCalculations(creditSum, creditTimeInMonths, interestRate, minManualPayment);
}

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
