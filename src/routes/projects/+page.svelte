<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
</script>

<div class="flex flex-col items-center gap-y-4 my-6">
	{#each data.projects as project}
		<ProjectCard data={project} />
	{/each}
</div>
