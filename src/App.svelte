<svelte:options tag="credit-estimator"/>

<script lang="ts">
    import {calculations, submit} from "@components/stores/CalculationsStore";
    import {AppForm, isAppFormValid, resetForm} from "@components/stores/FormStore";
    import {theme, isLightTheme, toggleTheme} from "@components/stores/ThemeStore";
    import {cn} from "@utils/commons";

    let calculationsTable;

    calculations.subscribe((calcs) => {
        ($isAppFormValid && !!calcs && !!calculationsTable) && setTimeout(() => calculationsTable.scrollIntoView({behavior: 'smooth'}), 0)
    })

    function onFormSubmit(e) {
        e.preventDefault()
        if (e.key === 'Enter') submit()
    }
</script>

<main class='font-sans w-full h-full' data-theme={$theme}>
    <section class='bg-green-200 dark:bg-teal-600 min-h-screen w-full'>
        <div class='sm:container mx-auto w-full h-full py-10'>
            <div class='w-11/12 sm:w-6/12 md:w-5/12 max-w-screen-md mx-auto'>
                <!-- Theme Toggler -->
                <label class="swap swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" bind:checked={$isLightTheme} on:click={toggleTheme}/>
                    <!-- sun icon -->
                    <svg class='swap-on fill-current w-10 h-10' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                    </svg>
                    <!-- moon icon -->
                    <svg class='swap-off fill-current w-10 h-10' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                    </svg>
                </label>
                <form on:submit={onFormSubmit}
                      class='container mx-auto flex items-center justify-center flex-wrap flex-row'>
                    {#if $AppForm}
                        {#each $AppForm as {
                            name,
                            value,
                            type,
                            label,
                            placeholder
                        }}
                            <div class='flex-auto w-full mx-auto my-2 [&>div]:justify-center [&>div]:items-center'>
                                <div class="form-control">
                                    <label for={label} class="label self-start">
                                        <span class="text-black dark:text-white">{label}</span>
                                    </label>
                                    <input id={label} bind:value={value} type='number' placeholder={placeholder}
                                           class='input input-primary input-bordered dark:text-white sm:w-full w-11/12 '/>
                                </div>
                            </div>
                        {/each}
                    {/if}
                    <div class='max-w-full flex flex-wrap flex-row [&>button]:mx-5 justify-center align-center'>
                        <button class={`btn btn-primary dark:btn-default dark:hover:btn-success mt-10 w-full btn-md sm:btn-md md:btn-md lg:btn-md${cn(!$isAppFormValid, 'btn-disabled')}`}
                                on:click={submit} aria-disabled={!$isAppFormValid} disabled={!$isAppFormValid}>
                            Submit
                        </button>

                        <button class='btn btn-neutral hover:btn-error text-black dark:text-white dark:hover:text-black mt-12 w-full btn-md sm:btn-md md:btn-md lg:btn-md'
                                on:click={resetForm}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <section bind:this={calculationsTable}
             class={`h-screen overflow-auto w-full${cn(!$calculations, 'hidden')}`}>
        {#if $calculations}
            <div class="overflow-x-auto">
                <table class="table table-normal w-full">
                    <thead>
                    <tr>
                        <th></th>
                        {#each $calculations?.headers as header }
                            <th>{header}</th>
                        {/each}
                    </tr>
                    </thead>
                    <tbody>
                    {#each $calculations?.items as item, idx }
                        <tr>
                            <th>{idx + 1}</th>
                            {#each $calculations?.headers as header }
                                <td>{item[header]}</td>
                            {/each}
                        </tr>
                    {/each}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th></th>
                        {#each $calculations?.headers as header }
                            <th>{header}</th>
                        {/each}
                    </tr>
                    </tfoot>
                </table>
            </div>
        {/if}
    </section>
</main>

<style lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>