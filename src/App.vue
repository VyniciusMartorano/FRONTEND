

<template>
  <div style="">
    <SplashLoading />
    <header id class="flex justify-center items-center pc-bg w-full h-14" > 
      <nav>
        <img src="./assets/LIVE_BIKE_LOGO-removebg-preview.png" alt="" id="home-logo">
      </nav>
    </header>
    <router-view />
  </div>
</template>
<script setup lang="js">
</script>
<style scoped>

img#home-logo {
  width: 100px;
  height: auto;
}

</style>