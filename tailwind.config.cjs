/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  // important: '#ce-app',
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{svelte,js,ts}'],
  // prefix: 'credit-estimator',
  theme: {
    fontFamily: {
      sans: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [daisyui],
  darkMode: ['class', '[data-theme="dark"]'],
};
