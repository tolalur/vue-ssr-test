import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router/router';
import './assets/style/style.scss';
import {createStore} from './store';

export default function createApp (context?: any) {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    render: h => h(App)
  })


  return { app, router, store }
}
