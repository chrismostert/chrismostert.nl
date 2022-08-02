<script context="module">
	export const prerender = true;
	export const hydrate = false;
</script>

<svelte:head>
	<title>Chris Mostert | Software Engineer. Data Scientist.</title>
	<meta
		name="description"
		content="Welkom op mijn persoonlijke website! Hier vind je alle info over mij en de projecten waar ik aan gewerkt heb."
	/>
</svelte:head>

<h1 class="text-6xl">Hallo 👋 Ik ben <strong class="text-accent">Chris Mostert</strong></h1>
<div class="flex flex-wrap gap-x-2.5 mt-2">
	<h2 class="text-4xl animate-fadein">Software Engineer.</h2>
	<h2 class="text-4xl animate-[fadein_1s_0.8s_backwards]">Data Scientist.</h2>
</div>
<a href="/about">
	<button
		class="mt-8 border-2 pb-2 pt-1 px-4 font-semibold text-2xl text-accent border-accent hover:text-white hover:bg-accent transition"
	>
		Over mij
	</button>
</a>
