import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/one',
          name: 'ItemOne',
          component: () => import('@/views/ItemOne')
        },
        {
          path: '/404',
          name: 'error',
          component: Error
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
})
