import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router';
import {createStore} from './store';
import {sync} from 'vuex-router-sync';
import './assets/style/style.scss';

export default function createApp (context?: any) {
  const router = createRouter();
  const store = createStore()

  // Синхронизируем чтобы состояние маршрута было доступно как часть хранилища
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
