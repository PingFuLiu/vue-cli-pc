import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index', 
      meta: {
        title: 'vue-首页',
      }
    },
    {
      path: '/index',
      component: Index,
      meta: {
        title: 'vue-首页',
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'vue-登录页',
      }
    }
  ]
})
