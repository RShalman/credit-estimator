import type { IForm } from '@components/complex/Form';
import { writable } from 'svelte/store';

const appFormSchema = (): IForm => [
  { name: 'creditSum', value: null, type: 'number', label: 'Credit sum', placeholder: 'Enter credit sum' },
  {
    name: 'creditTimeInMonths',
    value: null,
    type: 'number',
    label: 'Amount of months',
    placeholder: 'Enter num of months',
  },
  { name: 'interestRate', value: null, type: 'number', label: 'Interest rate', placeholder: 'Enter %' },
  {
    name: 'minManualPayment',
    value: null,
    type: 'number',
    label: 'Minimal repayment',
    placeholder: 'Enter min sum of repayment / month',
  },
];

export const AppForm = writable(appFormSchema());
export function resetAppForm() {
  AppForm.set(appFormSchema());
}
