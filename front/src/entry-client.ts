import _createApp from './main';
import { replaceState } from './store/helper';

let { app, router, store } = _createApp();

if ((window as any).__INITIAL_STATE__) {
  replaceState(store, (window as any).__INITIAL_STATE__);
}

(async (r, a) => {
  await r.isReady();
  a.mount('#app', true);
})(router, app);
