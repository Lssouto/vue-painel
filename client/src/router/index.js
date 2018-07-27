import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import ForgotPwd from '@/pages/Forgot-pwd'
import Painel from '@/pages/Painel'
import Forms from '@/pages/Forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/esqueci-a-senha',
      name: 'Forgot-pwd',
      component: ForgotPwd
    },
    {
      path: '/painel',
      name: 'Painel',
      component: Painel,
      meta: {
        login: true
      }
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms,
      meta: {
        login: true
      }
    },
    {
      path: '*',
      name: '404',
      component: Login
    }
  ],
  mode: "history"
})
