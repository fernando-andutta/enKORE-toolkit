<script>
	import { page } from "$app/stores";

	import Link from "$lib/components/Link.svelte";

	export let data;

	$: ({ taxa } = data);
</script>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>

<p>Create Quickstatements by taxon</p>

<table>
	<thead>
		<tr>
			<td>SinAS ID</td>
			<td>Taxa</td>
			<td>Wikidata QID</td>
		</tr>
	</thead>
	<tbody>
		{#each $taxa.data.taxa as taxon}
			<tr>
				<Link path={taxon.taxonID}>
					<td>
						{taxon.taxonID}
					</td>
					<td>
						{taxon.Taxon}
					</td>
				</Link>
				<Link path={`http://wikidata.org/entity/${taxon.TaxonQid}`} target="_blank" rel="noreferrer">
					<td>{taxon.TaxonQid}</td>
				</Link>
			</tr>
		{/each}
	</tbody>
</table>

<details>
	<summary>raw data</summary>
	<pre>
    {JSON.stringify($taxa.data, null, 2)}
  </pre>
</details>
