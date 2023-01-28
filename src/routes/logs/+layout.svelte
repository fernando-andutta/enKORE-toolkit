<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header>
	<nav>
		<ul>
			<li><Link path="./access">Access</Link></li>
			<li><Link path="./error">Error</Link></li>
		</ul>
	</nav>
</header>

<slot />
