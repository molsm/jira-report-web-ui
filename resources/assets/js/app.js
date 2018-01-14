import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from "./components/App"

const router = new VueRouter({
    mode: 'history',
    routes: [],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

