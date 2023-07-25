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

	for (let path in projects) {
		const project = { ...projects[path]?.metadata };
		const slug = path.split('/').at(-1)?.replace('.md', '');

		// Use dynamic vite import + mdsvex preprocess to return svelte renderable component
		let description = await import(`../../lib/projects/${slug}.md`);
		project.description = description?.default;

		// Set resolved image path, as processed by svelte-img
		project.img = images[`../../lib/images/projects/${slug}.jpg`]?.default;

		// Set the processed project for rendering
		projects[path] = project;
	}

	return { projects: Object.values(projects) };
}
