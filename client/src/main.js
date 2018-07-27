import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Filters from '@/filters' 

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: "#1b84aa",
    secondary: "#a35e10",
    accent: "#9c27b0",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
})


Vue.config.productionTip = false

sync( store, router )

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeMount(){
    if(!store.state.isUserLoggedIn)
      this.$router.push({
        name: 'Login'
      })
  }
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
