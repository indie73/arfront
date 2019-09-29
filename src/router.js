import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/instructions/:id',
      name: 'instructions',
      component: () => import('./views/Instruction.vue')
    },
    {
      path: '/points',
      name: 'points',
      component: () => import('./views/Points.vue')
    }
  ]
})
