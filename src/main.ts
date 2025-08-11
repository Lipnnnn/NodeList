import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages' // vite-plugin-pages 自动生成的路由
import 'virtual:uno.css'

const router = createRouter({
  history: createWebHistory('/NodeList/'),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
