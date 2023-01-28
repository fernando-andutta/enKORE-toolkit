<script>
	export let data;
	$: ({ entriesByTaxaList } = data);
</script>

<table>
	<thead>
		<tr>
			<td>Taxa</td>
			<td>Number of Entries</td>
		</tr>
	</thead>
	<tbody>
		{#each $entriesByTaxaList.data.taxa as item}
			<tr>
				<td>
					{item.Taxon}
				</td>
				<td>
					{item.entries.length}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<details>
	<summary>raw data</summary>
	<pre>
    {JSON.stringify($entriesByTaxaList.data, null, 2)}
  </pre>
</details>
