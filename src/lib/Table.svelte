<script lang="ts">
    import type {Table} from "@components/Table";

    export let table: Table;

</script>

<div class="overflow-x-auto">
    <table class="table table-compact w-full">
        <thead>
        <tr>
            <th></th>
            {#each table.headers as header }
                <th>{header}</th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each table.items as item, idx }
            <tr>
                <th>{idx + 1}</th>
                {#each table.headers as header }
                    <td>{item[header]}</td>
                {/each}
            </tr>
        {/each}
        </tbody>
        <tfoot>
        <tr>
            <th></th>
            {#each table.headers as header }
                <th>{header}</th>
            {/each}
        </tr>
        </tfoot>
    </table>
</div>
