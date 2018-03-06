import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgotPwd from '@/components/Forgot-pwd'

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
  ],
  mode: "history"
})
