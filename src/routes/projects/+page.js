export async function load() {
	// Fetch projects which are markdown files preprocessed by mdsvex
	const projects = import.meta.glob('../../lib/projects/*.md', {
		eager: true
	});

	// Fetch project images.
	// Uses the query param for image import (see https://github.com/JonasKruckenberg/imagetools/issues/5)
	// for lazy loading using svelte-img
	const images = import.meta.glob('../../lib/images/projects/*.jpg', {
		eager: true,
		query: { run: 'yes' }
	});

	// Process every project .md file for rendering
	for (let path in projects) {
		const project = { ...projects[path]?.metadata };
		const slug = path.split('/').at(-1)?.replace('.md', '');

		// Set content
		project.description = projects[path]?.default;

		// Set resolved image path, as processed by svelte-img
		project.img = images[`../../lib/images/projects/${slug}.jpg`]?.default;

		// Set the processed project for rendering (title is mandatory)
		if (projects[path]?.metadata?.title) {
			projects[path] = project;
		}
	}

	// Return the sorted list of values by date, descending
	return {
		projects: [...Object.values(projects)].sort((a, b) => {
			return b.date - a.date;
		})
	};
}
