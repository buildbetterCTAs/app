import Vue from 'vue'
import Router from 'vue-router'
import builder from '@/components/builder'
import callback from '@/components/callback'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Builder',
      component: builder
    },
    {
      path: '/callback',
      name: 'Callback',
      component: callback
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
