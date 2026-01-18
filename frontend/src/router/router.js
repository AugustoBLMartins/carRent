import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Cars from '../views/Cars.vue'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import Register from '../views/Register.vue'
import Booking from '../views/Booking.vue'
=======
import BookNow from '../views/BookNow.vue'
>>>>>>> 319e9eb44676620805d7127876b09832760c464d

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
<<<<<<< HEAD
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: Booking
  },
=======
    path: '/BookNow',
    name: 'BookNow',
    component: BookNow
  }
>>>>>>> 319e9eb44676620805d7127876b09832760c464d
  // novas rotas vão aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
