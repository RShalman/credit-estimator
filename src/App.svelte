<script lang="ts">
    import Button from "@components/Button.svelte";
    import Form from "@components/complex/Form.svelte";
    import MainLayout from "@components/MainLayout.svelte";
    import {AppForm} from "@components/stores/FormStore";
    import ThemeToggler from "@components/ThemeToggler.svelte";
    import TailwindCSS from "./TailwindCSS.svelte";

</script>

<TailwindCSS/>
<MainLayout>
    <ThemeToggler/>
    <Form bind:form={$AppForm} withReset/>
</MainLayout>