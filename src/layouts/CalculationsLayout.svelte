<script lang="ts">
    import {calculations} from "@components/stores/CalculationsStore";
    import {isAppFormValid} from "@components/stores/FormStore";

    let calculationsTable;

    calculations.subscribe((calcs) => {
        ($isAppFormValid && !!calcs && !!calculationsTable) && setTimeout(() => calculationsTable.scrollIntoView({behavior: 'smooth'}), 0)
    })
</script>

<section bind:this={calculationsTable}
     class={`h-screen overflow-auto w-full${$calculations ? '' :  " " + 'hidden'}`}>
    <slot/>
</section>