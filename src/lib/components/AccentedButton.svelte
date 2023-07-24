<script>
	export let href, text;
</script>

<a data-sveltekit-preload-data="hover" {href}>
	<button
		class="border-2 pb-2 pt-1 px-4 font-semibold text-2xl text-accent border-accent hover:text-white hover:bg-accent transition"
	>
		{text}
	</button>
</a>
