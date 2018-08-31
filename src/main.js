import '@/js/iconfont.min';
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router/router';
import store from './store';

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

// 在路由切换的时候回到顶部了
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
