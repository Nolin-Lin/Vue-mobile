import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { path: '/', redirect: 'index', component: resolve => require(['@/views/index/index'], resolve) },
  { path: '/login', component: resolve => require(['@/views/login/login'], resolve) },
  { path: '/index', component: resolve => require(['@/views/index/index'], resolve) },
  { path: '/shop', component: resolve => require(['@/views/shop/shop'], resolve) },
  { path: '/detail', component: resolve => require(['@/views/shop/GoodsDetail'], resolve) },
  {
    path: '/my',
    redirect: '/my/my',
    component: resolve => require(['@/views/my/container'], resolve),
    children: [
      {
        path: 'my',
        component: resolve => require(['@/views/my/children/my'], resolve)
      }, {
        path: 'info',
        component: resolve => require(['@/views/my/children/info'], resolve)
      }, {
        path: 'setusername',
        component: resolve => require(['@/views/my/children/setusername'], resolve)
      }, {
        path: 'setpassword',
        component: resolve => require(['@/views/my/children/setpassword'], resolve)
      },
      {
        path: 'collect',
        component: resolve => require(['@/views/my/children/collect'], resolve)
      }
    ]
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
