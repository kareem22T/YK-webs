import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pharotoView from '../views/PharotoView.vue'
import DashboardView from '../views/DashboardView.vue'
import FentecView from '../views/FentecView.vue'

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
    path: '/dashboard-view',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/fentec-preview',
    name: 'fentec',
    component: FentecView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
