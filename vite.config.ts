import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss,
      }),
      emitCss: false,
      compilerOptions: {
        customElement: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ['svelte'],
  },
  css: {
    postcss,
  },

  build: {
    assetsDir: '',
    sourcemap: true,
    lib: {
      formats: ['iife'],
      entry: 'src/lib.ts',
      name: 'CreditEstimator',
      fileName: 'credit-estimator',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'svelte',
        },
      },
    },
  },
});
