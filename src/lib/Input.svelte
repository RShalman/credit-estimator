<script lang="ts">
    export let value, label = 'Your label', placeholder = 'Your placeholder'
    export const type = 'text'
</script>

<div class="form-control">
    <label for={label} class="label self-start">
        <span class="text-black dark:text-white">{label}</span>
    </label>
    <input id={label} type='number' placeholder={placeholder} class="input input-primary input-bordered dark:text-white w-full"
           bind:value={value}/>
</div>