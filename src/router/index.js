import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pharotoView from '../views/PharotoView.vue'
import offView from '../views/OffView.vue'
import MammothView from '../views/MammothView.vue'
import GympoView from '../views/GympoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pharoto-view',
    name: 'pharoto',
    component: pharotoView
  },
  {
    path: '/off-view',
    name: 'off',
    component: offView
  },
  {
    path: '/mammoth-view',
    name: 'mammoth',
    component: MammothView
  },
  {
    path: '/gympo-view',
    name: 'gympo',
    component: GympoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
