<script lang="ts">
    import type {IForm} from "src/lib/complex/Form.d";
    import Input from "../Input.svelte";

    export let form: IForm = []
</script>

<form on:submit={(e) => e.preventDefault() }
      class="container mx-auto flex items-center justify-center flex-wrap flex-row ">
    {#each form as {value, ...field}}
        <div class="flex-auto w-full mx-auto [&>div]:justify-center [&>div]:items-center">
        <Input bind:value={value} {...field}/>
        </div>
    {/each}
</form>
