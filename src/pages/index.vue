<template>
  <PageView>
    <template #header>
      <div
        class="text-1rem h-1.5rem line-height-1.5rem flex items-center justify-between bg-#323233 p-1rem"
      >
        <div></div>
        <div class="text-center font-bold text-1.3rem text-#fff">笔记</div>
        <img
          v-if="!isDark"
          width="25"
          height="25"
          :src="darkThemeIcon"
          @click="handleSetTheme(true)"
        />
        <img
          v-else
          width="25"
          height="25"
          :src="lightThemeIcon"
          @click="handleSetTheme(false)"
        />
      </div>
    </template>
    <div class="overflow-auto h-full">
      <!-- <div class="h-16 bg-[var(--color-btn)] dark:text-yellow">这是内容</div>
      <van-button type="default">默认按钮</van-button> -->
    </div>
  </PageView>
</template>

<script setup lang="ts">
import PageView from "../components/PageView.vue";
import { ref } from "vue";
import { setTheme } from "../ts/theme";
import settingsIcon from "@/assets/img/settings.svg";
import darkThemeIcon from "@/assets/img/dark-theme.svg";
import lightThemeIcon from "@/assets/img/light-theme.svg";

const isDark = ref(document.documentElement.classList.contains("dark"));
const handleSetTheme = (val: boolean) => {
  isDark.value = val;
  setTheme(val ? "dark" : "light");
};
</script>
