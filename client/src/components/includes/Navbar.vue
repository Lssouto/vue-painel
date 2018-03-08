<template>
    <nav id="navbar" :class="{expanded : status}">
        <div class="logo">
            <span class="name">VuePainel</span>
        </div>
        <ul>
            <li>
                <span class="fa fa-home"></span>
                <span class="name">Home</span>
            </li>
            <li>
                <span class="fa fa-users"></span>
                <span class="name">Users</span>
            </li>
            <li class="dropdown-nav">
                <input type="checkbox" name="games" id="games" />
                <label for="games">
                    <span class="fa fa-gamepad"></span>
                    <span class="name">Games</span>
                </label>
                <ul class="dropdown-list">
                    <li>foo</li>
                    <li>foo</li>
                </ul>
            </li>
            <li>
                <span class="fa fa-square"></span>
                <span class="name">Buttons</span>
            </li>
            <li>
                <span class="fa fa-align-justify"></span>
                <span class="name">Forms</span>
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
    @extend .fast-e;
    
	input[type="checkbox"]{
		display: none;
	}
	
	li{
		position: relative;
		overflow: hidden;
		a,label{	
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
			
			&:hover,&:active,&:focus{
				text-decoration: none;
				background-color: darken($main,15%);
			}
		}

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
		span.fa{
			font-size: 22px;
			margin-right: 5px;
		}
	}	
	.logo{
		position: relative;
		background-color: lighten($black, 15%);	
		padding: 10px 15px;
		//height: 52px;
		color: $white;
        font-size: 24px;
        word-wrap: none;
		img{
			position: absolute;
			top: -15px;
			left: 15px;
			height: 65px;
		}
	}
	&.expanded{
		margin-left: 0;
	}
	@media (min-width:$sm){
        position: relative;
        top: 0;
        left: 0;
        max-width: 200px;
		z-index: 1;
		margin-left: 0;
        width: initial;
        height: 100%;
		&.expanded{
			text-align: center;
			span.fa{
				font-size: 26px;
			}
			span.name{
				display: none;
			}
		}
	}
}
</style>

