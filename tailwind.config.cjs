/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  plugins: [daisyui],
  darkMode: ['class', '[data-theme="dark"]'],
};
