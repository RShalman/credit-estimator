import type { IFunction } from '@customTypes/custom';
import App from 'src/App.svelte';
import './global.scss';

const app = (id: string): [App, IFunction] => {
  let application = new App({
    target: document.getElementById(id),
  });

  const onUnmount = () => {
    if (!application) return;
    application.$destroy();
    application = null;
  };

  return [application, onUnmount];
};

export default app;
