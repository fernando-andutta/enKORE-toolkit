<script>
	import { base } from "$app/paths";
	export let path;
</script>

<a href={`${base}/${path}`}><slot /></a>
