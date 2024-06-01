<script setup lang="ts">
  import {useLayoutMode} from "@husqpdf/ui";
  const layout = useLayoutMode()
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
