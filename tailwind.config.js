/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{svelte,js,ts}'],
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
