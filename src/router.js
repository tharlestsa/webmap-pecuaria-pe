import Vue from 'vue'
import Router from 'vue-router'
import VueGtag from 'vue-gtag'

Vue.use(Router)

const routes = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        {
          name: 'Pecuária',
          path: 'map/pecuaria',
          component: () => import('@/views/dashboard/themeMaps/Pecuaria'),
        }
      ],
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error'),
        },
      ],
    },
  ],
})
Vue.use(VueGtag, {
  config: { id: '' },
}, routes)

export default routes
