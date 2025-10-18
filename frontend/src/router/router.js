import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'

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
  // novas rotas vão aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
