export async function load({ fetch }) {
	// Fetch projects which can be loaded using API
	const response = await fetch('api/projects');
	let projects = await response.json();

	// To use query param for image import (see https://github.com/JonasKruckenberg/imagetools/issues/5)
	const images = import.meta.glob('../../lib/images/projects/*.jpg', {
		eager: true,
		query: { run: 'yes' }
	});

	for (let project in projects) {
		// Use dynamic vite import + mdsvex preprocess to return svelte renderable component
		let description = await import(`../../lib/projects/${projects[project].slug}.md`);
		projects[project].description = description.default;

		// Set resolved image path, as processed by svelte-img
		projects[project].img =
			images[`../../lib/images/projects/${projects[project].slug}.jpg`]?.default;
	}

	return { projects };
}
