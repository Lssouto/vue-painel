<template>
  <div class="login container relative">
    <div class="painel">
      <form action="" v-on:submit.prevent="login">
        <div class="input-container">
          <label for="username">Login</label>
          <input type="text" class="form-control" id="username" v-model="credentials.username">
        </div>
        <div class="input-container">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" id="pwd" v-model="credentials.pwd">
        </div>
        <div class="forgot-pwd">
          <router-link tag="a" :to="{name: 'Forgot-pwd'}">Esqueceu a senha ? </router-link>   
        </div>
        <button class="btn bg-main">Login</button>
        <button @click="seed()" class="btn bg-main">seed</button>
      </form>
    </div>
  </div>
</template>

<script>
import AuthS from '@/services/Authentication';
export default {
  name: 'Login',
  data(){
    return {
      credentials:{
        username: '',
        pwd: ''
      }
    }
  },
  async mounted (){
    const stillValid = (await AuthS.validate());
    console.log(stillValid)
    
    if(this.$store.state.token){
      this.$router.push({name: 'Painel'})
    }
      
  },
  methods: {
    async login(){
      let data = await AuthS.post(this.credentials)
      if(data.status){
        this.$store.dispatch('setToken', data.token)
        this.$store.dispatch('setUser', data.data)
        //token change isUserLoggedIn
        this.$router.push({name: 'Painel'})
      }
      else{
        console.log(data.error)
      }
    },
    async seed(){
      let data = await AuthS.seed()
      console.log(data);
    }
  }
}
</script>


<style lang="scss">
.login.container{
  background-image: linear-gradient(to top, $main, darken($main,10%));
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
.painel{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 45px;
  width: auto;
  border-radius: 20px;
  background-color: $white;
  width: 400px;
}
.forgot-pwd{
  text-align: right;
}

</style>
