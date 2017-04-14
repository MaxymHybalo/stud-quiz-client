import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Category from './components/category/Category.vue'
import AddCategory from './components/category/AddCategory.vue'
import CategoryView from './components/category/CategoryView.vue'
import Subject from './components/subject/Subject.vue'
import QuestionCase from './components/question/QuestionCase.vue'
import StartupQuizComponent from './components/quiz/StartupQuizComponent.vue'

import axios from 'axios'
import VueRouter from 'vue-router'
import store from './service/store'

import {sync} from 'vuex-router-sync'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const router = new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/category', component: Category},
    { path: '/category/new', component: AddCategory},
    { path: '/subject', component: Subject},
    { path: '/question', component: QuestionCase},
    { path: '/category/:id', component: CategoryView},
    { path: '/quiz', component: StartupQuizComponent}
  ]
})

sync(store, router)

var app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
