<script setup lang="ts">
import { theme } from '@/ts/theme'
</script>

<template>
  <van-config-provider :theme="theme">
    <RouterView v-slot="{ Component, route }">
      <KeepAlive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </KeepAlive>
      <component v-else :is="Component" />
    </RouterView>
  </van-config-provider>
</template>

<style scoped></style>
