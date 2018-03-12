<template>
    <header class="row m-0 flex-align ">
        <div class="text-right options">
            <button class="userOption" @click="logout">Login</button>
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "Header",
    methods: {
        logout(){
            this.$store.dispatch('setToken', '')
            this.$store.dispatch('setUser', '')
            this.$router.push({
                name: 'Login'
            })
        }
    },
    computed:{
      ...mapState([
        'isUserLoggedIn'
      ])
    }
}
</script>

<style lang="scss">
header{
	position: initial;
	background: $black;
  	padding: 0;
	color: $white;
	font-size: 22px;
	float: none;
	font-weight: bolder;
	height: 55px;
	
	.userOption{
		padding: 10px 15px;
		display: inline-block;
		text-decoration: none;
		background: none;
		border: 0px;
		color: $white;
		cursor: pointer;
		&:hover{
			text-decoration: none;		
			background-color: rgba(255,255,255,0.3);	
		}
	}
	a:link,a:visited{
		color: $white;
		font-size: 20px;
	}
	
    .options{
		//padding-right: 60px;
		width: 100%;
    }
	@media (min-width: $sm) {
	    .options{
	    	padding-right: 0;
	    }
	}
}
</style>

