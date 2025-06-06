import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../App.vue') // ou seu componente de homepage futuro
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
