import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './template.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import router from './router'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
        app.use(router)
        app.use(pinia)
        app.mount('#app')
