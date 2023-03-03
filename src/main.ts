import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { router } from './router'
import './styles/reset.css'
import './styles/nums.css'
import './styles/elReset.css'
import './styles/iconfont.css'
import store from './stores'

const app = createApp(App)
app.use(store).use(ElementPlus).use(router)
app.mount('#app')
