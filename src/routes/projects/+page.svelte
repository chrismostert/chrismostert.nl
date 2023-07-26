<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>Chris Mostert | Projecten</title>
	<meta
		name="description"
		content="Mijn verschillende projecten waar ik aan gewerkt heb, van academische papers tot interactieve webapplicaties. Ik vind het leuk om mijn hobby's (muziek en film) in mijn programmeerprojecten terug te laten komen."
	/>
</svelte:head>

<div class="flex flex-col items-center gap-y-4 my-4">
	{#each data.projects as project}
		<ProjectCard data={project} />
	{/each}
</div>
