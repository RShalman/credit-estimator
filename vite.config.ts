import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: true,
    }),
    tsconfigPaths(),
    //  TODO: think of styles cleanup on unmount
    cssInjectedByJsPlugin({ topExecutionPriority: true, styleId: `'credit-estimator-styles'` }),
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
