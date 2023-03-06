import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { router } from './router'
import './styles/index.css'
import store from './stores'

const app = createApp(App)
app.use(store).use(ElementPlus).use(router)
app.mount('#app')
