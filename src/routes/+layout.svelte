<script>
	import '../app.css';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<div class="max-w-6xl h-[100dvh] mx-auto flex flex-col px-4">
	<div class="py-4">
		<nav class="flex space-x-8">
			<a href="/" class="text-xl transition-all hover:underline   bg-white rounded-b-lg">Home</a>
			<a href="/projects" class="text-xl hover:underline  bg-white  rounded-b-lg">Projecten</a>
			<a href="/about" class="text-xl hover:underline  bg-white  rounded-b-lg">Over mij</a>
		</nav>
	</div>

	<main class="flex-1">
		<div class="h-full flex flex-col justify-center">
			<slot />
		</div>
	</main>

	<footer class="py-4">
		<SocialIcons />
	</footer>
</div>
