<script>
	export let href, text;
</script>

<a sveltekit:prefetch {href}>
	<button
		class="mt-8 border-2 pb-2 pt-1 px-4 font-semibold text-2xl text-accent border-accent hover:text-white hover:bg-accent transition"
	>
		{text}
	</button>
</a>
