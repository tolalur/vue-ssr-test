import createApp from './main';

const {app, router, store} = createApp();
declare const module
if ((window as any).__INITIAL_STATE__) {
  // Инициализируем состояние хранилища данными, внедрёнными на сервере
  store.replaceState((window as any).__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app');
});
