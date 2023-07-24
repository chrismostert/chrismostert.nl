import { json } from '@sveltejs/kit';

async function get_projects() {
	let projects = [];
	const paths = import.meta.glob('/src/lib/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			const project = {
				...metadata,
				slug
			};
			projects.push(project);
		}
	}

	return projects;
}

export async function GET() {
	const projects = await get_projects();
	return json(projects);
}
