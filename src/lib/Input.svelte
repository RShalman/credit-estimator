<script lang="ts">
    export let value, type = 'text', label = 'Your label', placeholder = 'Your placeholder'

</script>

<div class="form-control">
    <label class="label self-start">
        <span class="text-black">{label}</span>
    </label>
    <input type='number' placeholder={placeholder} class="input input-primary input-bordered w-full"
           bind:value={value}/>
</div>