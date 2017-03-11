import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

import axios from 'axios'
import VueRouter from 'vue-router'
import store from './service/store'

import {sync} from 'vuex-router-sync'
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://127.0.0.1:8000/';



const router = new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

sync(store, router)

var app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
