<template>
  <div id="app">

    <c-navbar />

    <div class="desktop-nav-margin">
      <c-header />
      <transition name="fade">
        <router-view/>
      </transition>
    </div>

  </div>
</template>

<script>
import cHeader from '@/pages/includes/Header'
import cNavbar from '@/pages/includes/Navbar'
export default {
  name: 'App',
  components: {
    cHeader,
    cNavbar
  }
}
</script>

<style lang="scss">
@media (min-width: $sm) {
  .desktop-nav-margin{
    margin-left: 50px;
  }
}
</style>
