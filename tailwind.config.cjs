/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  // important: '#ce-app',
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{svelte,js,ts}'],
  // prefix: 'credit-estimator-',
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [daisyui],
  darkMode: ['class', '[data-theme="dark"]'],
};
