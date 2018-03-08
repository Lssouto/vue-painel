<template>
    <header class="row m-0 flex-align ">
        <button class="nav-toggle btn" @click="changeNav">
        <span class="fa fa-bars">toggle Nav</span>
        </button>
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
        changeNav(){
            this.$emit('change-nav')
        },
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
	height: 52px;
	
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
	.nav-toggle{
		position: absolute;
		display: inline-block;
    	top: 0;
    	right: 0;
    	margin: 0;
		padding: 10px 15px;
		font-size: 25px;
		text-align: center;
		background: none;
		border: 0px;
		color: $white;
		&:hover,&:active,&:focus{
			color: $white;
			text-decoration: none;		
			background-color: rgba(255,255,255,0.3);	
			box-shadow: none;
		}
    }
    .options{
    	padding-right: 60px;
    }
	@media (min-width: $sm) {
		
	    .nav-toggle{
	    	position: relative;
			padding: 10px 15px;
			height: 100%;
			text-align: center;
			display: inline-block;
	    }
	    .options{
	    	padding-right: 0;
	    }
	}
}
</style>

