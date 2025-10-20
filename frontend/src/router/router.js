import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Cars from '../views/Cars.vue'
import Login from '../views/Login.vue'
import BookNow from '../views/BookNow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/BookNow',
    name: 'BookNow',
    component: BookNow
  }
  // novas rotas vão aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
