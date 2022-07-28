<script>
    export let label = 'Your label';
    export let placeholder = 'Your placeholder';
    export let value = ''
    export let onChange = () => {}
</script>

<div class="form-control">
    <label class="label">
        <span class="text-black">{label}</span>
    </label>
    <input type="text" placeholder={placeholder} class="input input-primary input-bordered w-full max-w-xs"
           value={value} on:change={onChange}/>
</div>