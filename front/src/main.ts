import App from './App.vue';
import { _createRouter } from './router/router';
import './assets/style/style.scss';
import { _createStore } from './store';
import { createSSRApp } from 'vue';

export default function _createApp() {
  const router = _createRouter();
  const store = _createStore();

  const app = createSSRApp(App);
  app.use(router);

  return { app, router, store };
}
