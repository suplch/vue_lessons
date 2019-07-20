import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import SingerList from './views/SingerList';
import SongList from './views/SongList';
import LifeCycle from './views/LifeCycle';
import WaitPay from './views/WaitPay';

import Login from './views/Login';
import Register from './views/Register';

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
    },
    {
      path: '/life',
      component: LifeCycle
    },
    {
      path: '/pay',
      component: WaitPay
    },
    {
      path: '/login',
      component: Login
    },{
      path: '/register',
      component: Register
    }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
