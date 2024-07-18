<template>
  <div id="home-background">
    <Nav />
    <SplashLoading v-if="$globalState.isLoading"/>
    
    <router-view />
    
  </div>
</template>

<script>
import SplashLoading from '@/components/splash/SplashLoading.vue'
import Nav from '@/components/nav/Nav.vue'

export default {
  name: 'Home', 
  components: {
    SplashLoading,
    Nav
  },

}
</script>

<style scoped>



</style>
