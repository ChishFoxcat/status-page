import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: (process.env.NODE_ENV === 'production') ? createWebHistory() : createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from) => {

})

export default router
