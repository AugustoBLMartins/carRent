import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Booking from '../views/Booking.vue'

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
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: Booking
  },
  // novas rotas vão aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
