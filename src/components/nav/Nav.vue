<template>
  <header class="pc-bg text-black shadow-md">
    <div class="container mx-auto p-4 flex justify-between items-center">
      <div class="w-32">
        <img
          src="./../../assets/svgs/logo-horizontal.svg"
          class=""
          id="nav-logo"
        />
      </div>
      <nav
        :class="{ block: isOpen, hidden: !isOpen }"
        class="w-full md:w-auto md:flex md:items-center"
      >
        <ul
          class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 "
        >
          <li class="text-center"><a href="#">Serviços</a></li>
          <li class="text-center"><a href="#">Bicicletas</a></li>
          <li class="text-center"><a href="#">Contato</a></li>
          <li class="text-center"><a href="#">Onde estamos</a></li>
        </ul>
      </nav>
      <div>
        <!-- <button
          class="px-[6.73px] py-[6.73px] text-black border border-black rounded-[3.366px]"
        >
          Entrar
        </button> -->
      </div>

      <div class="w-32 justify-end text-right flex">
        <div class="pr-3 pl-3">
          <Button v-if="themeIsBlack" rounded @click="toggleDarkMode()" icon="pi pi-sun"  />
          <Button v-else rounded @click="toggleDarkMode()" icon="pi pi-moon" />
        </div>
        <button @click="toggleMenu" class="md:hidden text-2xl focus:outline-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { SunIcon } from 'lucide-vue-next';
import { MoonIcon } from 'lucide-vue-next';

export default {
  name: "ResponsiveHeader",
  components: {
    SunIcon,
    MoonIcon
  },
  data() {
    return {
      isOpen: false,
      themeIsBlack: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDarkMode() {
      const element = document.querySelector('html')
      element.classList.toggle('my-app-dark')
      this.themeIsBlack = !this.themeIsBlack
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Opcional, para limitar a largura do contêiner */
}
img#nav-logo {
  width: 100px;
  height: auto;
}
</style>
