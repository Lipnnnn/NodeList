import { useStorage } from '@vueuse/core'
export const theme = useStorage('theme', 'light')

export function setTheme(mode: 'light' | 'dark') {
  const html = document.documentElement
  html.classList.remove('light', 'dark')
  html.classList.add(mode)

  // Vant4 暗色模式
  theme.value = mode
}

export function initTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) {
    setTheme(saved as 'light' | 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }
}

