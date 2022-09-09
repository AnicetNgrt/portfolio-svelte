import path from 'path';



import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            '$components': path.resolve('./src/components'),
            '$logic': path.resolve('./src/logic'),
            '$styles': path.resolve('./src/styles'),
            '$types': path.resolve('./src/types.ts'),
        }
    }
};

export default config;