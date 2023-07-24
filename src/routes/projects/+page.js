export async function load({ fetch }) {
	const response = await fetch('api/projects');
	let projects = await response.json();

	for (let project in projects) {
		// Use dynamic vite import + mdsvex preprocess to return svelte renderable component

		let description = await import(`../../lib/projects/${projects[project].slug}.md`);
		projects[project].description = description.default;

		let img_path = await import(`../../lib/images/projects/${projects[project].img}.jpg`);
		projects[project].img = img_path.default;
	}

	return { projects };
}
