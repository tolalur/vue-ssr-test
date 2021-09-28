import createApp from './main';
import {replaceState} from './store/helper';

let {app, router, store,} = createApp();

if ((window as any).__INITIAL_STATE__) {
  replaceState(store, (window as any).__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app');
});
