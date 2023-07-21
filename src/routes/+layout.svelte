<script>
	import '../app.css';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<div class="h-[100dvh] flex flex-col">
	<header class="py-4 shadow-md">
		<div class="max-w-6xl mx-auto px-4">
			<nav class="flex gap-x-8 flex-wrap">
				<a href="/" class="text-xl transition-all hover:underline   bg-white rounded-b-lg">Home</a>
				<a href="/projects" class="text-xl hover:underline  bg-white  rounded-b-lg">Projecten</a>
				<a href="/about" class="text-xl hover:underline  bg-white  rounded-b-lg">Over mij</a>
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
