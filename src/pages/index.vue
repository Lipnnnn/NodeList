<template>
  <PageView>
    <template #header>
      <div class="text-right text-1rem h-1.5rem">
        <van-switch v-model="isDark" @change="handleSetTheme" />
      </div>
    </template>
    <div class="overflow-auto h-full">
      <div class="h-16 bg-[var(--color-btn)] dark:text-yellow">这是内容</div>
      <van-button type="default">默认按钮</van-button>
    </div>
  </PageView>
</template>

<script setup lang="ts">
import PageView from "../components/PageView.vue";
import { ref } from 'vue'
import { setTheme } from '../ts/theme'

const isDark = ref(document.documentElement.classList.contains('dark'))
const handleSetTheme = (val: boolean) => {
  isDark.value = val
  setTheme(val ? 'dark' : 'light')
}
</script>
