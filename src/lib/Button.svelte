<script lang="ts">
    import type {IFunction} from "@customTypes/custom";

    export let className: string;
    export let text: string = 'Button';
    export let onClick: IFunction = () => {
    };
    export let isDisabled: boolean = false
</script>

<button class={`btn${className ? " " + className : ''} w-full btn-md sm:btn-md md:btn-md lg:btn-md ${isDisabled ? 'btn-disabled' : ''}`}
        on:click={onClick} aria-disabled={isDisabled} disabled={isDisabled}>{text}</button>