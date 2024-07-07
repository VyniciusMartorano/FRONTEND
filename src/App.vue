<script setup lang="js">
</script>

<template>
  <div>
    <header id class="flex justify-center items-center pc-bg w-full h-14" > 
      <nav>
        <img src="./assets/LIVE_BIKE_LOGO-removebg-preview.png" alt="" id="home-logo">
      </nav>
    </header>
    <router-view />
  </div>
</template>
<style scoped>

img#home-logo {
  width: 100px;
  height: auto;
}
body {
  
}
</style>