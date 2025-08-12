import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'class', // 用 class 模式控制暗色
    }),
  ],
  theme: {
    colors: {
      brand: '#07c160', // Vant 默认主题色
    },
  },
})
