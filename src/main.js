import { createApp, reactive } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);

app.config.globalProperties.$globalState = reactive({ isLoading: false })

app.use(router)
app.mount('#app')


