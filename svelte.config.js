import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { markdown } from 'svelte-preprocess-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess(), markdown()],

    extensions: ['.svelte','.md'],

    kit: {
		adapter: node()
	}
};

export default config;
