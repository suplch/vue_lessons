import Vue from 'vue';
import VueRouter from 'vue-router';

import Summary from './pages/Summary';
import Singer from './pages/singer';
import Tracks from './pages/tracks';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        name: 'summary',
        path: '/',
        component: Summary
    }, {
        name: 'singer',
        path: '/singer',
        component: Singer
    }, {
        name: 'tracks',
        path: '/tracks',
        component: Tracks
    }]
});

export default router;
