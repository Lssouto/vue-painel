<template>
  <div class="login container relative">
    <div class="painel">
      <form action="" v-on:submit.prevent="login">
        <div class="input-container">
          <label for="username">Login</label>
          <input type="text" class="form-control" id="username" v-model="credentials.login">
        </div>
        <div class="input-container">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" id="pwd" v-model="credentials.pwd">
        </div>
        <div class="forgot-pwd">
          <router-link tag="a" :to="{name: 'forgot-pwd'}">Esqueceu a senha ? </router-link>   
        </div>
        <button class="btn bg-main">Login</button>
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
        login: '',
        pwd: ''
      }
    }
  },
  methods:{
    async login(){
      let data = await AuthS.post(this.credentials)
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
