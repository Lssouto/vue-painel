import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [
        createPersistedState()
    ],
    state:{
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations:{
        setToken ( state, token ){
            state.token = token
        },
        setUser ( state, user ){
            state.user = user
        },
        setLogged( state, logged ){
            state.isUserLoggedIn = logged
        }
    },
    actions:{
        setToken({commit},token){
            commit('setToken',token)
            if(token)
                commit('setLogged',true)
            else 
                commit('setLogged',false)
        },
        setUser({commit},user){
            commit('setUser',user)
        }
        
    }
})