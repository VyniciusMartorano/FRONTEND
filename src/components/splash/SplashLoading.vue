<template>
<div id="splash-container">
    <div id="splash-container-logo" class="flex justify-center items-center">
        <img src="./../../assets/logo-vertical.png" alt="" id="logo-splash"></div>
    <div id="spinner">
        
    </div>
</div>
</template>

<script>
export default {
name: 'SplashLoading', 
}
</script>

<style scoped>
#splash-container {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(102, 98, 98, 0.733)
}
#splash-container-logo {
    position: fixed;
    top: auto;
}

#logo-splash {
    height: 60px;
    display: flex
}

#spinner{
  height: 120px;
  width: 120px;
  position: fixed;
  top: auto;
  border: 10px solid;
  border-color: var(--primary-color) transparent var(--primary-color) transparent;
  border-radius: 50%;
  animation: spin 1.3s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
