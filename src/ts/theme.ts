export function setTheme(mode: 'light' | 'dark') {
  const html = document.documentElement
  html.classList.remove('light', 'dark')
  html.classList.add(mode)

  // Vant 4 暗色模式
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }

  localStorage.setItem('theme', mode)
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

