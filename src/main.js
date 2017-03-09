import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

import axios from 'axios'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login }
  ]
})


var app = new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
