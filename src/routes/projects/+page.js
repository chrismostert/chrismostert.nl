export async function load({ fetch }) {
	const response = await fetch('api/projects');
	let projects = await response.json();

	for (let project in projects) {
		// Use dynamic vite import + mdsvex preprocess to return svelte renderable component
		let description = await import(`../../projects/${projects[project].slug}.md`);
		projects[project].description = description.default;
	}

	return { projects };
}
