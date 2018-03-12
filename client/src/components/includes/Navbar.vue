<template>
	<div class="nav" :class="{expanded : status}">
		<button class="navbar-toggle btn" @click="status = !status">
			<span class="fa fa-bars"></span>
		</button>
		<nav id="navbar">
			<div class="logo">
				<span class="icon">
					<span class="fa fa-users"></span>
				</span>
				<span class="name">VuePainel</span>
			</div>
			<ul class="nav-list">
				<li>
					<a href="#">
						<span class="icon">
							<span class="fa fa-home"></span>
						</span>
						<span class="name">Homepage</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="icon">
							<span class="fa fa-users"></span>
						</span>
						<span class="name">Users</span>
					</a>
				</li>
				<li class="dropdown-nav">
					<input type="checkbox" name="games" id="games" />
					<label for="games">
						<span class="icon">
							<span class="fa fa-gamepad"></span>
						</span>
						<span class="name">Foo</span>
					</label>
					<ul class="dropdown-list">
						<li>
							<a href="#">
								Bar
							</a>
						</li>
						<li>
							<a href="#">
								foobar
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">
						<span class="icon">
							<span class="fa fa-square"></span>
						</span>
						<span class="name">Buttons</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="icon">
							<span class="fa fa-align-justify"></span>
						</span>
						<span class="name">Forms</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>	
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "Navbar",
	data (){
		return {
			status: false
		}
	},
    computed: {
      ...mapState([
        'isUserLoggedIn'
      ])
    },
}
</script>

<style lang="scss">
.nav{
	#navbar{
		background: $black;
		position: fixed;
		z-index: 75;
		margin-left: -100%;
		top: 0;
		height: 100%;
		
		input[type="checkbox"]{
			display: none;
		}
		
		li{
			position: relative;
			overflow: hidden;
	
			&.dropdown-nav{
				
				input[type="checkbox"] + label + ul{
					@extend .fast-e;
					position: absolute;
					margin-left: -100%;
				}
				input[type="checkbox"]:checked + label + ul{
					position: initial;
					margin-left: 0;
				}
				.dropdown-list{
					background-color: $main;
					width: 100%;
					li{
						a,label{
							line-height: 35px;
							color: $white;
							font-weight: bolder;
							display: block;
							cursor: pointer;
							background-color: $secundary;
							
							&:hover,&:active,&:focus{
								text-decoration: none;
								background-color: darken($secundary,15%);
							}
						}
					}
				}
			}
		}
		a,label,.logo{	
			@extend .fast-e;
			background-color: $main;
			color: $white;
			margin: 0px;
			display: block;
			padding: 0 15px;
			line-height: 53px;
			color: $white;
			font-weight: bolder;
			cursor: pointer;
			
			display: flex;
			align-items: flex-start;
		
			&:hover,&:active,&:focus{
				text-decoration: none;
				background-color: darken($main,15%);
			}
		}	
		.logo{
			position: relative;
			background-color: lighten($black, 15%);	
			height: 55px;
		}
		span.fa{
			font-size: 22px;
			margin-right: 8px;
		}
		
	}
	.navbar-toggle{
		position: absolute;
		display: inline-block;
		top: 0;
		left: 0;
		right: initial;
		height: 55px;
		width: 55px;
		padding: 0;
		font-size: 25px;
		text-align: center;
		background: none;
		border: 0px;
		color: $white;
		margin: 0;
		z-index: 100;	
		@extend .slow-e;
		&:hover,&:active,&:focus{
			color: $white;
			text-decoration: none;		
			background-color: rgba(255,255,255,0.3);	
			box-shadow: none;
		}
	}
	&.expanded{
		#navbar{
			margin-left: 0;
			.logo{
				padding-left: 60px;
				padding-right: 10px;
			}
		}
		.navbar-toggle{
			left: 0;
			background-color: $secundary;
		}
	}
	@media (min-width:$sm){
		#navbar{
			position: fixed;
			top: 0;
			left: 0;
			margin-left: 0;
			width: 50px;
			text-align: center;
			span.name{
				display: none;
			}
			span.fa{
				font-size: 26px;
				margin-right: 0;
			}
			a,label,.logo{
				padding: 0;
				display: block;
			}
		}
		.navbar-toggle{
			left: 50px;
		}
		&.expanded{
			#navbar{
				width: initial;
				text-align: left;
				span.name{
					display: inline-block;
				}
				.logo{
					padding-left: 60px;
					padding-right: 10px;
				}
				a,label{
					padding: 0 10px;
					display: flex;
					align-items: flex-start;
				}
				span.fa{
					margin-right: 8px;
				}
			}
		}
	}
}
</style>

