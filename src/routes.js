import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Inicio from '@/pages/inicio/Inicio.vue'
import Cadastro from '@/pages/cadastro/Cadastro.vue'
import Dashboard from '@/pages/dashboard/Dashboard.vue'
import Cookies from 'js-cookie'

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'inicio',
        name: 'Inicio',
        component: Inicio
      },
      {
        path: 'cadastre-se',
        name: 'Cadastro',
        component: Cadastro
      },
    ]
  }
]

const privateRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  }
]

const routes = [...publicRoutes, ...privateRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next('/')
  } else {
    next()
  }
})

export default router
