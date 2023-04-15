import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/_variables.scss" as *;\n'
			}
		}
	},
	build: {
		sourcemap: true
	},
	resolve: {
		alias: {
			$components: path.resolve('src/components'),
			$types: path.resolve('src/types'),
			$utils: path.resolve('src/utils'),
			$: path.resolve('src'),
		}
	}
});
