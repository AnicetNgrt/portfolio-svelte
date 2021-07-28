import { resolve } from 'path';
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
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node(),
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./src/components'),
                    $logic: resolve('./src/logic'),
                    $styles: resolve('./src/styles'),
                    $types: resolve('./src/types.ts'),
                }
            }
        }
	}
};

export default config;
