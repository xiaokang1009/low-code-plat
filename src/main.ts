import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { router } from './router'
import './styles/reset.css'
import './styles/nums.css'
import './styles/elReset.css'
import './styles/iconfont.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
