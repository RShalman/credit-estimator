<script lang="ts">
    import Button from "@components/Button.svelte";
    import type {IForm} from "@components/complex/Form";
    import Input from "@components/Input.svelte";
    import {resetAppForm} from "@components/stores/FormStore";
    import {theme} from "@components/stores/ThemeStore";
    import type {IFunction} from "@customTypes/custom";

    export let form: IForm;
    export let withReset: boolean = false;
    export let onSubmit: IFunction = () => {
    }
    $: isLightTheme = $theme === 'light'
</script>

<form on:submit={(e) => {
    e.preventDefault()
    onSubmit()
} }
      class="container mx-auto flex items-center justify-center flex-wrap flex-row ">
    {#if form}
        {#each form as {value, ...field}}
            <div class="flex-auto w-full mx-auto [&>div]:justify-center [&>div]:items-center">
                <Input bind:value={value} {...field}/>
            </div>
        {/each}
    {/if}
    <Button text="Submit" className={`${isLightTheme ? 'btn-primary' : 'btn-success'} dark:btn-outline mt-10 btn-wide`}
            onClick={onSubmit}/>
    {#if withReset}
        <Button text="Reset" className={"btn-error dark:btn-outline mt-12 btn-wide"} onClick={() => resetAppForm()} />
    {/if}
</form>
