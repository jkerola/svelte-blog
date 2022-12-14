import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions, '.md'],
  kit: {
    adapter: adapter(),
  },
  preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],
};

export default config;
