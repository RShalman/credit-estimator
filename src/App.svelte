<script lang="ts">
    import CalculationsLayout from "@components/CalculationsLayout.svelte";
    import type {FormFieldNames, IForm} from "@components/complex/Form";
    import Form from "@components/complex/Form.svelte";
    import MainLayout from "@components/MainLayout.svelte";
    import {calculations, makeCalculations} from "@components/stores/CalculationsStore";
    import {AppForm, isAppFormValid} from "@components/stores/FormStore";
    import Table from "@components/Table.svelte";
    import ThemeToggler from "@components/ThemeToggler.svelte";
    import TailwindCSS from "./TailwindCSS.svelte";

    $: fields = $AppForm.reduce((acc, cur) => ({
        ...acc,
        [cur.name]: cur.value
    }), {} as Record<FormFieldNames, IForm[number]['value']>)
    let creditSum, creditTimeInMonths, interestRate, minManualPayment;
    $: ({creditSum, creditTimeInMonths, interestRate, minManualPayment} = fields);

    function submit() {
        makeCalculations(creditSum, creditTimeInMonths, interestRate, minManualPayment)
    }
</script>

<main id="ce-app" class="overflow-x-hidden w-full h-full">
    <TailwindCSS />
    <MainLayout>
        <ThemeToggler/>
        <Form
                bind:form={$AppForm}
                onSubmit={submit}
                isValidForm={$isAppFormValid}
                withReset
        />
    </MainLayout>
    <CalculationsLayout>
        {#if $calculations}
            <Table table={$calculations}/>
        {/if}
    </CalculationsLayout>
</main>