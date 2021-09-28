import Vue from 'vue'
import Router from 'vue-router'
import {VueRouter} from 'vue-router/types/router';

Vue.use(Router)

export function createRouter(): VueRouter {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../pages/Home.vue') },
      { path: '/category*', component: () => import('../pages/Category.vue') },
      { path: '/**', component: () => import('../pages/NotFound.vue') },
    ]
  })
}
