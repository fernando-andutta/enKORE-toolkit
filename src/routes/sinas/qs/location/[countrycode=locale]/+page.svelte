<script>
  export let data;

  $: ({ entriesByCountry } = data);
  const delimiter = "|";
</script>

<table>
  {#each $entriesByCountry.data.locations as location}
    {#each location.entries as entry}
      <tr>
        <td>
          {`${entry.taxa.TaxonQid}${delimiter}P5588${delimiter}${location.locationqid}${delimiter}P1810${delimiter}"${entry.taxa.Taxon}"${delimiter}P1932${delimiter}"${location.location}"${delimiter}S248${delimiter}Q112339024`}
        </td>
      </tr>
    {/each}
  {/each}
</table>

<details>
  <summary>raw data</summary>
  <pre>
    {JSON.stringify($entriesByCountry.data, null, 2)}
  </pre>
</details>
