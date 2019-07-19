import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import SingerList from './views/SingerList';
import SongList from './views/SongList';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/singers',
      component: SingerList
    },
    {
      path: '/songs/:singer_id',
      component: SongList
    }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
