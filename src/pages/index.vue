<template>
  <PageView>
    <template #header>
      <div class="text-right text-1rem h-1.5rem">dark</div>
    </template>
    <div class="overflow-auto h-full">
      <div class="h-16 bg-red dark:bg-gray-800 dark:text-yellow">这是内容</div>
    </div>
  </PageView>
</template>

<script setup lang="ts">
import PageView from "../components/PageView.vue";
</script>
