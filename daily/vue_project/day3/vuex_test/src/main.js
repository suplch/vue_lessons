import Vue from 'vue'
import App from './App.vue'

import store from './store';

Vue.config.productionTip = false;


new Vue({
  store,  // 将 store 注入到 vue 实例里面, 注入后  在vue 中 可以通过 this.$store 访问
  render: h => h(App),
}).$mount('#app');

//store.commit('inc');
