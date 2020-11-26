import Vue from 'vue';
import vuetify from './plugins/vuetify';
import 'bootstrap';
import jQuery from 'jquery';
import store from './store';
import router from './router';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

window.$ = window.jQuery;
window.jQuery = jQuery;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
