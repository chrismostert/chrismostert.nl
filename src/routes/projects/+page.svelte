<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>Chris Mostert | Projecten</title>
</svelte:head>

<div class="flex flex-col items-center gap-y-4 my-4">
	{#each data.projects as project}
		<ProjectCard data={project} />
	{/each}
</div>
