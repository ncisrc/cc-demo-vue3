import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('../views/SpeakersView.vue')
    },
    {
      path: '/vueuse',
      name: 'vueuse',
      component: () => import('../views/VueUseView.vue')
    },
    {
      path: '/locales',
      name: 'locales',
      component: () => import('../views/LocalizedView.vue')
    },
  ]
})

export default router
