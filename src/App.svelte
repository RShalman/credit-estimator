<script lang="ts">
    import type {IForm} from "src/lib/complex/Form.d";
    import MainLayout from "./layouts/MainLayout.svelte";
    import Form from "./lib/complex/Form.svelte";
    import ThemeToggler from "./lib/ThemeToggler.svelte";
    import TailwindCSS from "./TailwindCSS.svelte";

    let appForm: IForm = [
        {name: 'creditSum', value: null, type: 'number', label: 'Credit sum', placeholder: 'Enter credit sum'},
        {
            name: 'creditTimeInMonths',
            value: null,
            type: 'number',
            label: 'Amount of months',
            placeholder: 'Enter num of months'
        },
        {name: 'interestRate', value: null, type: 'number', label: 'Interest rate', placeholder: 'Enter %'},
        {
            name: 'minManualPayment',
            value: null,
            type: 'number',
            label: 'Minimal repayment',
            placeholder: 'Enter min sum of repayment / month'
        },
    ]
</script>

<TailwindCSS/>
<MainLayout>
    <ThemeToggler/>
    <Form bind:form={appForm}/>
</MainLayout>