<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	let example_data = {
		title: 'Hello',
		link: 'images/arch.jpg',
		img: 'images/arch.jpg',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
		tags: ['SvelteJS', 'Rust', 'Typescript']
	};
</script>

<div class="flex flex-col items-center gap-y-4 my-6">
	<ProjectCard data={example_data} />
	<ProjectCard data={example_data} />
	<ProjectCard data={example_data} />
	<ProjectCard data={example_data} />
	<ProjectCard data={example_data} />
</div>
