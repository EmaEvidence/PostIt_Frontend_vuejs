// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import Toaster from 'v-toaster';
import App from './App';
import router from './router';
import store from './store/store';
import addTokenToHeader from './mixins/httpCalls';
import 'v-toaster/dist/v-toaster.css';

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Toaster, { timeout: 5000 });
addTokenToHeader();

sync(store, router);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
