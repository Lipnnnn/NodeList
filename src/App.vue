<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <KeepAlive v-if="route.meta.keepAlive">
      <component :is="Component" />
    </KeepAlive>
    <component v-else :is="Component" />
  </RouterView>
</template>

<style scoped></style>
