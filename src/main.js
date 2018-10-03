import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import App from './App.vue'

import { routes } from "./routes";
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

// firebase root connection
Vue.http.options.root = 'https://vue-stock-42966.firebaseio.com/'

// router setup + removing hash using mode:'history'
const router = new VueRouter({
  mode:'history',
  routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


