import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

import './style/style.scss'

const app = createApp(App)

// 在 mount 之前，否则：[Vue warn]: Failed to resolve component: router-link at <App>
app.use(router)

// 在 mount 之前，否则：Uncaught TypeError: Cannot read property 'state' of undefined
app.use(store)

app.use(ElementPlus)

app.mount('#app')
