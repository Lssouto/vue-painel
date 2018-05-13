<template>
	<div class="nav" :class="{expanded : status}">
		<button class="navbar-toggle btn" @click="status = !status">
			<span class="fa fa-bars"></span>
		</button>
		<nav id="navbar" :style="navHeight">
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
					<dropdown animation="slide">
						<template slot="name">
							<span class="icon">
								<span class="fa fa-gamepad"></span>
							</span>
							<span class="name">Foo</span>
						</template>
						<template slot="items">
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
										<span class="fa fa-home"></span>
									</span>
									<span class="name">Homepage</span>
								</a>
							</li>
						</template>
					</dropdown>	
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
import Dropdown from '@/components/plugins/Dropdown'
export default {
    name: "Navbar",
	data (){
		return {
			status: false,
			navHeight: {
				'min-height': '100%'
			}
		}
	},
	components: {
		Dropdown
	},
	mounted (){
		this.putNavMinHeight();
	},
	methods : {
		putNavMinHeight(){
			this.navHeight['min-height'] = document.body.offsetHeight + 'px';	
		}	
	},
	watch : {
		'document.body.offsetHeight' : ()=>{
			this.putNavMinHeight();
		}	
	}
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
		overflow-y: auto;
		
		li{
			.dropdown-vue{
				width: 100%;
				//Remove the dropdown arrow
				.dropdown-vue-toggle{
					width: 100%;
					&:after{
						display: none;
					}
				}
				.dropdown-vue-menu{
					z-index: 125;
					position: relative;
					min-width: initial;
					box-shadow: none;
					li{
						padding: 0;
						border-bottom: 0px;
						a{
							line-height: 35px;
							color: $white;
							font-weight: bolder;
							display: block;
							cursor: pointer;
							background-color: $secundary;
							
							&:hover,&:active,&:focus{
								position: relative;
								z-index: 25;
								box-shadow: -8px 0 8px 3px rgba($white,0.5);
								text-decoration: none;
								background-color: darken($secundary,15%);
							}
						}
					}
				}
			}
		}
		a,.logo,.dropdown-vue-toggle{	
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
				position: relative;
				z-index: 25;
				box-shadow: -8px 0 8px 3px rgba($white,0.3);
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
		@extend .fast-e;
		&:hover{
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
		.dropdown-vue-menu,.dropdown-vue-toggle{
			text-align: left;
		}
	}
	@media (min-width:$sm){
		#navbar{
			position: absolute;
			top: 0;
			left: 0;
			margin-left: 0;
			width: 50px;
			text-align: center;
			overflow-y: initial;
			span.name{
				display: none;
			}
			span.fa{
				font-size: 26px;
				margin-right: 0;
			}
			a,.logo,.dropdown-vue-toggle{
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
				span.name{
					display: inline-block;
				}
				.logo{
					padding-left: 60px;
					padding-right: 10px;
				}
				a,.dropdown-vue-toggle{
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

