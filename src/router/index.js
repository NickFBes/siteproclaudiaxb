// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Accueil' },
  { path: '/portugais', name: 'LePortugais' },
  { path: '/prestations', name: 'Prestations' },
  { path: '/contact', name: 'Contact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
