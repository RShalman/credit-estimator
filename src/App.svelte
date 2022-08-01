<script lang="ts">
    import type {IForm} from "src/lib/complex/Form.d";
    import Form from "./lib/complex/Form.svelte";
    import TailwindCSS from "./TailwindCSS.svelte";

    let appForm: IForm = [
        {name: 'creditSum', value: 0, type: 'number', label: 'Credit sum', placeholder: 'Enter credit sum'},
        {
            name: 'creditTimeInMonths',
            value: 0,
            type: 'number',
            label: 'Amount of months',
            placeholder: 'Enter num of months'
        },
        {name: 'interestRate', value: 0, type: 'number', label: 'Interest rate', placeholder: 'Enter %'},
        {
            name: 'minManualPayment',
            value: 0,
            type: 'number',
            label: 'Minimal repayment',
            placeholder: 'Enter min sum of repayment / month'
        },
    ]
</script>

<TailwindCSS/>
<main class="bg-green-200 h-screen w-screen">
    <div class="container mx-auto w-full h-full p-10">
        <div class="max-w-screen-md mx-auto">
            <Form bind:form={appForm}/>
        </div>
    </div>
</main>