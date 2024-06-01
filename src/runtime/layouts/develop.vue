<script setup lang="ts">
import {refreshNuxtData, useRoute} from "#imports";
import {watchDebounced} from "@vueuse/shared";

let schema: any;
const route = useRoute()

try {
  const response = await fetch("schema.json")
  schema = await response.json()
} catch (e) {
  schema = {}
}

watchDebounced(() => route.fullPath, refresh, { debounce: 750 });

function refresh() {
  refreshNuxtData("pdf-preview");
}
</script>

<template>
  <husq-dev-layout :schema="schema">
    <nuxt-layout name="preview">
      <slot />
    </nuxt-layout>
  </husq-dev-layout>
</template>
