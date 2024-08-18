import { createApp, reactive } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes'
import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Button from "primevue/button"
import FloatLabel from 'primevue/floatlabel';
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});

app.component('Button', Button);
app.component('FloatLabel', FloatLabel);

app.config.globalProperties.$globalState = reactive({ isLoading: false })

app.use(router)
app.mount('#app')



