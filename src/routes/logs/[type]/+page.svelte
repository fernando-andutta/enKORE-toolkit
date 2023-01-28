<script>
  import { Datatable } from "svelte-simple-datatables";
  export let data;

  $: currData = data.logData;
  let rows;
</script>

<h2>Access Logs</h2>

<p>Server access logs will appear here.</p>

{#if currData}
  <Datatable data={currData} bind:dataRows={rows}>
    {#if rows}
      <tbody>
        {#each $rows as row}
          <tr>
            <td>{row}</td>
          </tr>
        {/each}
      </tbody>
    {/if}
  </Datatable>
{/if}

<pre>
  {JSON.stringify(data, null, 2)}
</pre>
