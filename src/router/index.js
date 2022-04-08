import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '@/store';

const router = createRouter({
  history: (process.env.NODE_ENV === 'production') ? createWebHistory() : createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title != undefined) {
    store.commit("Global/changeSiteTitle", to.meta.title);
  }

  next();
})

router.afterEach((to, from) => {
})

export default router
