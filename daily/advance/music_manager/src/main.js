import Vue from 'vue'
import ElementUI from 'element-ui';
import './assets/style.css';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';
import store from './store';

import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI);

const tsObj = {
  'singer': '歌手',
  'composer': '创造者',
};
Vue.filter('typeDesc', function (value) {
  let ts = String(value).split('|');
  let tss = [];
  for (let t of ts) {
    tss.push(tsObj[t])
  }
  return tss.join(', ');
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
