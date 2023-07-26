<script>
	import '../app.css';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#02aab0" />
</svelte:head>

<div class="h-[100dvh] flex flex-col">
	<header class="shadow-md bg-accent">
		<div class="max-w-6xl mx-auto px-4">
			<nav class="flex flex-wrap" data-sveltekit-preload-data="hover">
				<a
					href="/"
					class="text-xl transition-colors text-white font-semibold p-4 hover:bg-accentlight"
					>Home</a
				>
				<a
					href="/projects"
					class="text-xl transition-colors text-white font-semibold p-4 hover:bg-accentlight"
					>Projecten</a
				>
				<a
					href="/about"
					class="text-xl transition-colors text-white font-semibold p-4 hover:bg-accentlight"
					>Over mij</a
				>
			</nav>
		</div>
	</header>

	<main class="flex-1">
		<div class="max-w-6xl mx-auto h-full flex flex-col justify-center px-4">
			<slot />
		</div>
	</main>

	<footer class="py-4">
		<div class="max-w-6xl mx-auto px-4">
			<SocialIcons />
		</div>
	</footer>
</div>
