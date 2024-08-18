import { createApp, reactive } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import Lara from '@primevue/themes/lara';
import Button from "primevue/button"
import FloatLabel from 'primevue/floatlabel';
import 'primeicons/primeicons.css'
import theme from './theme';
import { definePreset } from '@primevue/themes';

const app = createApp(App);
const MyPreset = definePreset(Aura, theme);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
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



