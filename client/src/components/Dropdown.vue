<template>
  <div class="dropdown-vue" :class="{active : showMenu}">
    <button class="dropdown-vue-toggle btn" @click="showMenu = !showMenu">
        <slot name="name">
            Dropdown
        </slot>
    </button>
    <transition :name="animation">
        <ul v-show="showMenu" class="dropdown-vue-menu">
            <slot name="items">
                <li>foo</li>  
                <li>Bar</li> 
            </slot>
        </ul>
    </transition> 
  </div>
</template>

<script>
export default {
  name: "Dropdown-vue",
  data(){
      return {
        showMenu: false
      }
  },
  watch:{
      active (value){
          if(!!value)
            this.showMenu = value;
      }
  },
  props:[
      'active',
      'animation'
  ]
}
</script>

<style lang="scss">
.dropdown-vue{
    position: relative;
    display: inline-block;
    
    .dropdown-vue-toggle {
        cursor: pointer;
        position: relative;
        padding: 0 25px;
        background: none;
        margin: 0;
        &:after{
            @include pseudo(initial,inline-block);
            @extend .fast-e;
            height: 6px;
            width: 6px;
            border-right: 2px solid $primary;
            border-bottom: 2px solid $primary;
            transform: rotate(45deg) translate3d(0, -50%, 0);
        }
    }
    
    .dropdown-vue-menu{
        position: absolute;
        min-width: 150px;
        top: 100%;
        left: 0;
        background-color: $white;
        border: 1px solid $light-gray;
        font-size: 15px;
        font-weight: normal;
        box-shadow: 0 0 8px 2px rgba($black,.4);
        li{
            @extend .fast-e;
            color: $black;
            display: block;
            padding: 10px 25px;
            cursor: pointer;
            font-weight: bolder;
            &:hover{
                background-color: $primary;
                color: $white;
                border-bottom: 1px solid $white;
            }
            &:not(:last-child){
                border-bottom: 1px solid $primary;
            }
        }
    }

    &.active{
        .dropdown-vue-toggle:after{
            transform: scale(1,-1) rotate(45deg) translate3d(2px,-2px, 0);
        }
    }
}
</style>

