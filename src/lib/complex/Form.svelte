<script lang="ts">
    import Button from "@components/Button.svelte";
    import type {IForm} from "@components/complex/Form";
    import Input from "@components/Input.svelte";
    import {resetCalculations} from "@components/stores/CalculationsStore";
    import {resetAppForm} from "@components/stores/FormStore";
    import {theme} from "@components/stores/ThemeStore";
    import type {IFunction} from "@customTypes/custom";

    export let form: IForm;
    export let withReset: boolean = false;
    export let onSubmit: IFunction = () => {
    }
    export let isValidForm: boolean = false;
    $: isLightTheme = $theme === 'light'
</script>

<form on:submit={(e) => {
    e.preventDefault()
    if(e.key === 'Enter') onSubmit()
} }
      class="container mx-auto flex items-center justify-center flex-wrap flex-row ">
    {#if form}
        {#each form as {value, ...field}}
            <div class="flex-auto w-full mx-auto my-2 [&>div]:justify-center [&>div]:items-center">
                <Input bind:value={value} {...field}/>
            </div>
        {/each}
    {/if}
    <div class="max-w-full flex flex-wrap flex-row [&>button]:mx-5 justify-center align-center">
    <Button text="Submit" className={`${isLightTheme ? 'btn-primary' : 'btn-success'} dark:btn-outline mt-10`}
            onClick={onSubmit} isDisabled={!isValidForm}/>
    {#if withReset}
        <Button text="Reset" className={"btn-error dark:btn-outline mt-12"} onClick={() => {
            resetAppForm()
            resetCalculations()
        }}/>
    {/if}
    </div>
</form>
