<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header>
	<nav>
		<ul>
			<li><Link path="/sinas/qs">QuickStatements</Link></li>
			<li><Link path="/sinas/taxa">taxa</Link></li>
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
