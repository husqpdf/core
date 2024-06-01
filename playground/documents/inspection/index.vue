<script setup lang="ts">
  import { usePageData } from "my-components"
  const pageData = usePageData<any>()
</script>

<template>
  <h1 class="text-6xl p-8">My Report</h1>
  <p>{{pageData}}</p>
</template>

<style scoped>

</style>
