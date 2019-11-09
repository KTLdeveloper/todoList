import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/todo',
  routes: []
})

router.beforeEach((to, from, next) => {})

export default router