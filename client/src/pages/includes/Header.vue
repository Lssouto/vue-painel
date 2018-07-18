<template>
    <header>
        <div class="text-right options">
			<dropdown class="user-option" animation="fade">
				<template slot="name">
					{{ user | capitalize}}
				</template>
				<template slot="items">
					<li>Meus Dados</li>
					<li @click="logout">Logout</li>
				</template>
			</dropdown>	
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'
import Dropdown from '@/components/Dropdown'
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
        'isUserLoggedIn',
        'user'
      ])
	},
	components: {
		Dropdown
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
	
	.options{
		.user-option{
			display:inline-block;
			vertical-align: top;
			height: 35px;
			padding: 10px 15px;
			background-color: $medium-gray;
			@extend .fast-e;
			border-bottom: 0px;
			color: $white;
			margin: 0 0 0 1px;
			&:hover{
				text-decoration: none;		
				background-color: lighten($medium-gray,10%);
			}
			&.dropdown-vue{
				height: 55px;
				padding: 0;
				.dropdown-vue-menu{
					left: initial;
					right: 0;
				}
				.dropdown-vue-toggle{
					height: 55px;
					padding: 10px 25px;
					color: $white;
					&:after{
						border-color: $white;
					}
				}
			}
		}
	}
}
</style>

