<template>
  <div class="login container">
    <div class="painel">
      <form action="" v-on:submit.prevent="logar">
        <h1>Forgot the password</h1>
        <div class="input-container">
          <label for="username">Login</label>
          <input type="text" class="form-control" id="username" v-model="credentials.login">
        </div>
        <button class="btn bg-main">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
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
    async logar(){
      console.log('foo')
      console.log(this.credentials.login)
      console.log(this.credentials.pwd)
    }
  }
}
</script>


<style lang="scss">
</style>
