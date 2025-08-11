import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  // base: '/NodeList/',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()], // 自动解析 Vant 组件
    }),
    Pages({
      dirs: 'src/pages', // 扫描目录
      extensions: ['vue'], // 识别的文件类型
      routeBlockLang: 'yaml', // 支持在组件里用 <route> 配置路由元信息
    }),
  ],
})
