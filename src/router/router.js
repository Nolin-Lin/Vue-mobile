import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { path: '/', redirect: 'index', component: resolve => require(['@/views/index/index'], resolve) },
  { path: '/login', name: 'login', component: resolve => require(['@/views/login/login'], resolve) },
  { path: '/index', name: 'index', component: resolve => require(['@/views/index/index'], resolve) },
  { path: '/shop', name: 'shop', component: resolve => require(['@/views/shop/shop'], resolve) },
  { path: '/my', name: 'my', component: resolve => require(['@/views/my/my'], resolve) },
  { path: '/info', name: 'info', component: resolve => require(['@/views/my/info'], resolve) }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
