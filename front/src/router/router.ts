import {createRouter, createMemoryHistory, createWebHistory, Router} from 'vue-router';

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
  {path: '/', component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')},
  {path: '/category/:nested(.*)*', component: () => import(/* webpackChunkName: "category" */ '../pages/Category.vue')},
  {path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "notFound" */ '../pages/NotFound.vue')}
];

export function _createRouter(): Router {
  return createRouter({routes, history});
}
