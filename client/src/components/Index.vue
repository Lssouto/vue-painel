<template>
    <div>
        <h1>Entrou</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    name: "Homepage",
    methods: {
        logout(){
            this.$store.dispatch('setToken', '')
            this.$store.dispatch('setUser', '')
            this.$router.push({
                name: 'Login'
            })
        }
    }
}
</script>

<style>

</style>

