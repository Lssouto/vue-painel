<template>
  <div id="app" class="full-container">
    <div class="flex-align">
      <c-navbar :status="navbarExpandedStatus"/>
      <div class="max">
        <c-header @change-nav="navbarExpandedStatus = !navbarExpandedStatus"/>
        <transition name="fade">
          <router-view/>
        </transition>
      </div>  
    </div>
  </div>
</template>

<script>
import cHeader from '@/components/includes/Header'
import cNavbar from '@/components/includes/Navbar'
export default {
  name: 'App',
  data(){
    return {
      navbarExpandedStatus: true
    }
  },
  components: {
    cHeader,
    cNavbar
  }
}
</script>

<style lang="scss">
.full-container{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  & > div {
    height: 100%;
  }
}
</style>
