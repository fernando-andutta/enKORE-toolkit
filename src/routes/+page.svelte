<script>
	import Link from "$lib/components/Link.svelte";
</script>

<h1>enKORE Tool</h1>

<p>A set of tools to help manage the enKORE corpus and associated data processing.</p>

<section>
	<Link path="corpus"><h2>Corpus</h2></Link>
	<p>
		This is the enKORE Corpus site that serves an OAI-PMH endpoint, primarily used for BASE Search ingestion, which is
		used by Open Knowledge Maps to render custom maps of relevant journal articles.
	</p>
</section>

<section>
	<Link path="sinas"><h2>SinAS</h2></Link>
	<p>Tool to view and process the SinAS database</p>
</section>

<section>
	<Link path="logs"><h2>Logs</h2></Link>
	<p>View server access logs, etc</p>
</section>
