<template>
	<div class="nav" :class="{expanded : status}">
		<button class="navbar-toggle btn" @click="status = !status">
			<span class="icon-bar top-bar"></span>
		    <span class="icon-bar middle-bar"></span>
			<span class="icon-bar bottom-bar"></span>
			<!--<span class="fa fa-bars"></span>-->
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
					<router-link :to="{name: 'Painel'}" tag="a">
						<span class="icon">
							<span class="fa fa-home"></span>
						</span>
						<span class="name">Homepage</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{name: 'Inf-scroll'}" tag="a">
						<span class="icon">
							<span class="fa fa-users"></span>
						</span>
						<span class="name">Infinity Scroll</span>
					</router-link>
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
					<router-link tag="a" :to="{name : 'Forms'}">
						<span class="icon">
							<span class="fa fa-align-justify"></span>
						</span>
						<span class="name">Forms</span>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>	
</template>

<script>
import Dropdown from '@/components/Dropdown'
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
			this.navHeight['min-height'] = this.getBrowserHeight() + 'px';	
		},
		getBrowserHeight(){
        	var D = document;
		    return Math.max(
		        D.body.scrollHeight, D.documentElement.scrollHeight,
		        D.body.offsetHeight, D.documentElement.offsetHeight,
		        D.body.clientHeight, D.documentElement.clientHeight
		    );
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
		top: 0;
		width: 100%;
		overflow-y: auto;
		transform: translate3d(-100%,0,0);
		@extend .slow-e;
		
		li{
			.dropdown-vue{
				width: 100%;
				display: block;
				
				.dropdown-vue-toggle{
					width: 100%;
					&:after{
						display: none;
					}
				}
				.dropdown-vue-menu{
					z-index: 225;
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
								z-index: 125;
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
			background-color: $primary;
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
				z-index: 225;
				text-decoration: none;
				background-color: darken($primary,15%);
			}
		}	
		.logo{
			transition: 0s !important;
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
		line-height: 0;
		@extend .fast-e;
		
		.icon-bar {
		    background-color: $white;
		    border-radius: 4px;
		    width: 25px;
		    transition: all 0.2s;
		    height: 3px;
		    display: inline-block;
		   	margin-top: -2px;
		   	margin-bottom: 4px;
		}
		&:hover{
			color: $white;
			text-decoration: none;		
			background-color: rgba(255,255,255,0.3);	
			box-shadow: none;
		}
	}
	&.expanded{
		#navbar{
			transform: translate3d(0,0,0);
			.logo{
				transform: translate3d(55px,0,0);
				width: calc( 100% - 55px);
			}
		}
		.navbar-toggle{
			background-color: $secundary;
		}
		.dropdown-vue-menu,.dropdown-vue-toggle{
			text-align: left;
		}
		
		.icon-bar{
			width: 34px;
			
			&.top-bar {
			    transform: rotate(45deg);
			    transform-origin: 6px 6px;
		  	}
		  	
			&.middle-bar {
			    opacity: 0;
			}
			
			&.bottom-bar {
			    transform: rotate(-45deg);
			    transform-origin: 8px 0px;
			}
		}
		
	}

	@media (min-width:$sm){
		#navbar{
			position: absolute;
			top: 0;
			left: 0;
			width: 50px;
			overflow-y: initial;
			text-align: center;
			transform: translate3d(0,0,0);
			
			span.name{
				display: inline-block;
				position: absolute;
				left: 50px;
				top: 50%;
				transform: translate3d(0,-50%,0);
			}
			span.fa{
				font-size: 26px;
				margin-right: 0;
			}
			
			a,.logo,.dropdown-vue-toggle{
				padding: 0;
				display: block;
				overflow: hidden;
				text-align: left;
				span.icon{
					text-align: center;
					width: 50px;
					display: inline-block;
				}
			}
		}
		.navbar-toggle{
			left: 50px;
		}
		&.expanded{
			#navbar{
				width: 200px;
			}
			.navbar-toggle{
				transform: translate3d(-50px,0,0);
			}
		}
	}
}
</style>

