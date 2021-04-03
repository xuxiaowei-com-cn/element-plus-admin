import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

// 在 mount 之前，否则：[Vue warn]: Failed to resolve component: router-link at <App>
app.use(router)

app.mount('#app')
