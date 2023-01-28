<script>
	import Link from "$lib/components/Link.svelte";

	export let data;

	$: ({ countries } = data);
</script>

<table>
	<thead>
		<tr>
			<td>
				<p>Create Quickstatements by country</p>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<Link path={`/sinas/qs/location/all`}>ALL</Link>
			</td>
		</tr>
		{#each $countries.data.locations as location}
			<tr>
				<td>
					<Link path={`/sinas/qs/location/${location.countrycode}`}>{location.location}</Link>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<details>
	<summary>raw data</summary>
	<pre>
    {JSON.stringify($countries.data, null, 2)}
  </pre>
</details>
