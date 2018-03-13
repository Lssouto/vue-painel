<template>
  <div class="dropdown-vue" :class="{active : showMenu}">
    <button class="dropdown-vue-toggle btn" @click="showMenu = !showMenu">
        <slot name="name">
            Dropdown
        </slot>
    </button>
    <ul class="dropdown-vue-menu">
        <slot name="items">
            <li>foo</li>  
            <li>Bar</li> 
        </slot>
    </ul>
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
      'active'
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
            height: 6px;
            width: 6px;
            border-right: 2px solid $main;
            border-bottom: 2px solid $main;
            transform: rotate(45deg) translateY(-50%);
        }
    }
    
    .dropdown-vue-menu{
        @extend .fast-e;
        position: absolute;
        min-width: 200px;
        top: 100%;
        left: 0;
        opacity: 0;
        height: 0;
        background-color: $white;
        box-shadow: 0 0 15px 0 $light-gray;
        font-size: 18px;
        font-weight: normal;
        li{
            @extend .fast-e;
            color: $black;
            display: block;
            padding: 10px 25px;
            border-bottom: 1px solid $main;
            cursor: pointer;
            font-weight: bolder;
            &:hover{
                background-color: $main;
                color: $white;
                border-bottom: 1px solid $white;
            }
        }
    }

    &.active{
        .dropdown-vue-toggle:after{
            border-top: 2px solid $main;
            border-left: 2px solid $main;
            border-right: 0px;
            border-bottom: 0px;
        }
        .dropdown-vue-menu{
            display: block;
            height: initial;
            opacity: 1;
        }
    }
}
</style>

