import { appFormSchema } from '@components/stores/FormStore';

export type IForm = ReturnType<typeof appFormSchema>;
export type FormFieldNames = IForm[number]['name'];
