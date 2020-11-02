import Vue from 'vue/dist/vue.js'
import App from './App.vue';

import mock from "./mock/index";
Vue.use(mock);
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
