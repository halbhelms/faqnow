import { createRouter, createWebHistory } from 'vue-router'
import AccountEdit from '../views/AccountEdit'

const routes = [
  {
    path: '/account/',
    name: 'AccountEdit',
    component: AccountEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
