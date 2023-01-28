<script>
	import { Datatable } from "svelte-simple-datatables";

	import Link from "$lib/components/Link.svelte";

	export let data;

	const settings = { columnFilter: true };
	let rows;

	$: ({ corpusData } = data);
</script>

{corpusData.results.bindings.length}
{#if corpusData}
	<Datatable {settings} data={corpusData.results.bindings} bind:dataRows={rows} id={"dtcorpus"}>
		<thead>
			<th data-key="item">item</th>
			<th data-key="license">license</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					<tr>
						<td><Link path={row["item"].value}>{row["itemLabel"].value}</Link></td>
						<td><Link path={row["license"].value}>{row["licenseLabel"].value}</Link></td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</Datatable>
{:else}
	<p>Waiting on data...</p>
{/if}

<div class="devbox float top right">
	<details>
		<summary>raw data</summary>
		<pre>
      {JSON.stringify(corpusData, null, 2)}
    </pre>
	</details>
</div>

<style>
	.devbox {
		max-width: 80vw;
		background-color: white;
	}
	.float {
		position: absolute;
	}
	.right {
		right: 0;
	}
	.top {
		top: 0;
	}
	td {
		text-align: center;
		padding: 4px 0;
	}
</style>
