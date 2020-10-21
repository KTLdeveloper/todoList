import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      name: 'all',
      path: '/all',
      component: () => import(/* webpackChunkName: "All" */ '@/views/TodoAll.vue')
    },
    {
      name: 'done',
      path: '/done',
      component: () => import(/* webpackChunkName: "Done" */ '@/views/TodoDone.vue')
    },
    {
      name: 'undone',
      path: '/undone',
      component: () => import(/* webpackChunkName: "Undone" */ '@/views/TodoUndone.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/') next({path: '/all'})
//   next()
// })

export default router