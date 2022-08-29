import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	// Temporary vite workaround for fortawesome icons
	// see https://github.com/josdejong/svelte-jsoneditor/issues/107
	ssr: {
		noExternal: ['@fortawesome/*']
	}
};

export default config;
