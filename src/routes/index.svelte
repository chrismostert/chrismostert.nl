<script>
	import { onMount } from 'svelte';
	let title1_visible = false;
	let title2_visible = false;

	onMount(() => {
		title1_visible = true;
		title2_visible = true;
	});
</script>

<div class="flex h-screen md:items-center">
	<div class="mt-4 md:mt-0">
		<h1 class="text-6xl">Hallo 👋 Ik ben <strong class="text-accent">Chris Mostert</strong></h1>
		<div class="flex flex-wrap gap-x-2.5 mt-2">
			<h2 class="text-4xl transition duration-1000 {title1_visible ? 'opacity-100' : 'opacity-0'}">
				Software Engineer.
			</h2>
			<h2
				class="text-4xl transition delay-[800ms] duration-1000 {title2_visible
					? 'opacity-100'
					: 'opacity-0'}"
			>
				Data Scientist.
			</h2>
		</div>
		<button
			class="mt-8 border-2 pb-2 pt-1 px-4 font-semibold text-2xl text-accent border-accent hover:text-white hover:bg-accent transition"
		>
			<a href="/about">Over mij</a>
		</button>
	</div>
</div>
