<template>

    <section 
      class="flex flex-col justify-center items-center h-screen p-1 "
    >
      <button id="home-card-not-login" class="w-72 h-64 flex justify-center items-center m-4 rounded-lg home-card ">
        <h1 class="text-2xl font-bold text-center not-select">INICIAR SEM CADASTRO</h1>
      </button>
    
      <button id="home-card-sigin" class="w-72 h-64 flex-col flex justify-center items-center m-4 rounded-lg home-card" @click="startsWithLogin">
        <div class="flex">
          <h1 class="text-2xl font-bold text-center not-select">INICIAR COM CADASTRO</h1>
        </div>
        <div class="flex"><img id="home-svg-signin" src="./../../assets/svgs/sign-in-vector.svg" alt=""></div>
      </button>
    </section>
  </template>
  
  <script>
  
  export default {
    name: 'Inicio', 
    components: {
    },
    methods: {
    startsWithLogin() {
      //this.$globalState.isLoading = !this.$globalState.isLoading
      this.$router.push('/cadastre-se')
    }
  }  }
  </script>
  
  <style scoped>
#home-card-sigin {
  background-color: var(--primary-color);
  color: #FFFFFF;
}
#home-card-sigin:active {
  background-color: var(--primary-color-active);
  
}
#home-card-sigin:hover {
  background-color: var(--primary-color-hover);
  transition: background-color 0.5s ease;
}

#home-card-not-login {
  background-color: var(--darker-color);
  color: #FFFFFF;
}

#home-card-not-login:active {
  background-color: var(--dark-color-active);
}
#home-card-not-login:hover {
  background-color: var(--dark-color-hover);
  transition: background-color 0.5s ease;
}
.home-card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.298);
}

#home-svg-signin {
  width: 64px;
  height: 64px;
}

  #home-svg-signin {
    width: 64px;
    height: 64px;
  }
  
  </style>
  