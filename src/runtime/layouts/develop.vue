<script setup lang="ts">
import { refreshNuxtData } from '#imports'

let schema: any

try {
  const response = await fetch('schema.json')
  schema = await response.json()
}
catch (e) {
  schema = {}
}

const onStateChanged = () => {
  refreshNuxtData('pdf-preview')
}
</script>

<template>
  <husq-dev-layout
    :schema="schema"
    @onstatechange="onStateChanged"
  >
    <nuxt-layout name="preview">
      <slot />
    </nuxt-layout>
  </husq-dev-layout>
</template>
