import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalogue',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/ProductView.vue'),
      props: route => ({ id: Number(route.params.id) })
    },
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/WelcomeView.vue'),
    },
  ],
})

export default router
