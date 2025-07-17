<script setup lang="ts">
import {useAsyncData, useRoute} from "#imports";

const route = useRoute()

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
}

function getCurrentDocument() {
  return route.path.split("/").filter(Boolean).pop();
}

const { pending, data } = useAsyncData("pdf-preview", async () => {
  const document = getCurrentDocument()
  const pdfGenUrl = "http://localhost:3000/api/generate/" + document
  const key = `__hqpdf_page_state_` + document
  const pageData = localStorage.getItem(key) || "{}"

  const response = await fetch(pdfGenUrl, {
    method: "POST",
    body: pageData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const arrayBuffer = await response.arrayBuffer()
  return arrayBufferToBase64(arrayBuffer)
});
</script>

<template>
  <husq-preview-layout :base64="data" :pending="pending" />
</template>
