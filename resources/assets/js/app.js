import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './components/App'
import Store from './store'

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(Store);

const router = new VueRouter({
    mode: 'history',
    routes: [],
});

const app = new Vue({
    router,
    store,
    components: { App }

}).$mount('#app');

