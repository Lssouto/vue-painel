<template>
    <nav id="navbar" :class="{expanded : status}">
        <div class="logo">
			<span class="icon">
				<span class="fa fa-users"></span>
			</span>
            <span class="name">VuePainel</span>
        </div>
        <ul>
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
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "Navbar",
    computed: {
      ...mapState([
        'isUserLoggedIn'
      ])
    },
    props: [
        'status'
    ]
}
</script>

<style lang="scss">
#navbar{
    background: $black;
    position: fixed;
    z-index: 9999;
    margin-left: -100%;
    top: 0;
    height: 100%;
    @extend .slow-e;
    
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
	}
	span.fa{
		font-size: 22px;
		margin-right: 8px;
	}
	&.expanded{
		margin-left: 0;
	}
	@media (min-width:$sm){
        position: relative;
        top: 0;
        left: 0;
		z-index: 1;
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
			text-align: center;
		}
		&.expanded{
			text-align: left;
			width: initial;
			li{
				a,label{
					padding: 0 15px;
					display: flex;
					align-items: flex-start;

				}
			}
			span.name{
				display: inline-block;
			}
			span.fa{
				margin-right: 8px;
			}
		}
	}
}
</style>

