import App from 'src/App.svelte';

const app = (id: string) =>
  new App({
    target: document.getElementById(id),
  });

export default app;
