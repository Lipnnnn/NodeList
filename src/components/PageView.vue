<template>
  <div class="flex flex-col w-full h-screen p-1rem box-border">
    <header class="overflow-hidden">
      <slot name="header"></slot>
    </header>

    <main class="flex-1 overflow-auto">
      <slot></slot>
    </main>

    <footer class="overflow-hidden">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
