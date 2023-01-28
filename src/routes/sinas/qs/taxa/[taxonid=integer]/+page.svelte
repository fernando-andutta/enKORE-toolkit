<script>
	export let data;

	$: ({ entriesByTaxa } = data);
	const delimiter = "|";
</script>

<table>
	{#each $entriesByTaxa.data.taxa as taxon}
		{#each taxon.entries as entry}
			<tr>
				<td>
					{`${taxon.TaxonQid}${delimiter}P5588${delimiter}${entry.location.locationqid}${delimiter}P1810${delimiter}"${taxon.Taxon}"${delimiter}P1932${delimiter}"${entry.location.location}"${delimiter}S248${delimiter}Q112339024`}
				</td>
			</tr>
		{/each}
	{/each}
</table>

<details>
	<summary>raw data</summary>
	<pre>
    {JSON.stringify($entriesByTaxa.data, null, 2)}
  </pre>
</details>
