import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgotPwd from '@/components/Forgot-pwd'
import Painel from '@/components/Painel'

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
      path: '*',
      name: '404',
      component: Login
    }
  ],
  mode: "history"
})
