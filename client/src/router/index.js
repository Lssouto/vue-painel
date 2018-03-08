import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgotPwd from '@/components/Forgot-pwd'
import Index from '@/components/Index'

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
      name: 'forgot-pwd',
      component: ForgotPwd
    },
    {
      path: '/painel',
      name: 'Index',
      component: Index,
      meta: {
        login: true
      }
    },
  ],
  mode: "history"
})
