import { createApp, reactive } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes'

const app = createApp(App)


app.config.globalProperties.$globalState = reactive({ isLoading: false })

app.use(router)
app.mount('#app')


