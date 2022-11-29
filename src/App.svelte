<svelte:options tag="credit-estimator"/>

<script lang="ts">
    import {calculations, submit} from "@components/stores/CalculationsStore";
    import {AppForm, isAppFormValid, resetForm} from "@components/stores/FormStore";
    import {isLightTheme, toggleTheme} from "@components/stores/ThemeStore";
    import {cn} from "@utils/commons";
    import {
        mainWrapper,
        mainLayoutWrapper,
        mainLayoutContainer,
        mainLayout,
        togglerClass,
        formClass,
        formContainer,
        formInput,
        formButtonContainer,
        formButtonSubmit,
        formButtonReset
    } from "src/classes.ts";

    let calculationsTable;

    calculations.subscribe((calcs) => {
        ($isAppFormValid && !!calcs && !!calculationsTable) && setTimeout(() => calculationsTable.scrollIntoView({behavior: 'smooth'}), 0)
    })

    function onFormSubmit(e) {
        e.preventDefault()
        if (e.key === 'Enter') submit()
    }
</script>

<main class={mainWrapper}>
    <section class={mainLayoutWrapper}>
        <div class={mainLayoutContainer}>
            <div class={mainLayout}>
                <!-- Theme Toggler -->
                <label class="swap swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" bind:checked={$isLightTheme} on:click={toggleTheme}/>
                    <!-- sun icon -->
                    <img src="/src/assets/sun.svg" class={`swap-on ${togglerClass}`} alt="sun">
                    <!-- moon icon -->
                    <img src="/src/assets/moon.svg" class={`swap-off ${togglerClass}`} alt="moon">
                </label>
                <form on:submit={onFormSubmit}
                      class={formClass}>
                    {#if $AppForm}
                        {#each $AppForm as {
                            name,
                            value,
                            type,
                            label,
                            placeholder
                        }}
                            <div class={formContainer}>
                                <div class="form-control">
                                    <label for={label} class="label self-start">
                                        <span class="text-black dark:text-white">{label}</span>
                                    </label>
                                    <input id={label} bind:value={value} type='number' placeholder={placeholder}
                                           class={formInput}/>
                                </div>
                            </div>
                        {/each}
                    {/if}
                    <div class={formButtonContainer}>
                        <button class={`${formButtonSubmit}${cn(!$isAppFormValid, 'btn-disabled')}`}
                                on:click={submit} aria-disabled={!$isAppFormValid} disabled={!$isAppFormValid}>
                            Submit
                        </button>

                        <button class={formButtonReset}
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

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;

    @layer base {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        box-sizing: border-box;
    }
</style>