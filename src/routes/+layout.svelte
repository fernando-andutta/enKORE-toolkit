<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header>
	<nav>
		<ul>
			<li><Link path="">🏠</Link></li>
			<li><Link path="corpus">Corpus</Link></li>
			<li><Link path="sinas">Sinas</Link></li>
			<li><Link path="logs">Logs</Link></li>
		</ul>
	</nav>
</header>

<slot />

<style>
	ul {
		display: flex;
		gap: 2rem;
	}
	li {
		list-style-type: none;
	}
</style>
