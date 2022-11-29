import { resetCalculations } from '@components/stores/CalculationsStore';
import { writable } from 'svelte/store';

export type IForm = ReturnType<typeof appFormSchema>;
export type FormFieldNames = IForm[number]['name'];

export const appFormSchema = () =>
  [
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
  ] as const;

export const AppForm = writable(appFormSchema());
export const isAppFormValid = writable(false);

AppForm.subscribe((form) => {
  isAppFormValid.set(form.every(({ name, value }) => (name === 'minManualPayment' ? true : !!value)));
});

export function resetAppForm() {
  AppForm.set(appFormSchema());
}

export function resetForm() {
  resetAppForm();
  resetCalculations();
}
