<script lang="ts">
    import type {IFunction} from "@customTypes/custom";

    export let className: string;
    export let text: string = 'Button';
    export let onClick: IFunction = () => {};
</script>

<button class={`btn${className ? " " + className : ''} btn-xs sm:btn-sm md:btn-md lg:btn-md`} on:click={onClick}>{text}</button>