import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
