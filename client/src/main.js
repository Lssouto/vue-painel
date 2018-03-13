import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Filters from '@/filters' 
 
  //import './assets/scss/main.scss'
  

Vue.config.productionTip = false

sync( store, router )

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
   
  if (to.matched.some(record=> record.meta.login)) {
    if(!store.state.isUserLoggedIn){
      next({
        name : 'Login'
      })
    }
    else {
      next()
    }
  }
  else{
    next()
  }
})
