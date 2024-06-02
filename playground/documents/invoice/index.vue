<script setup lang="ts">
const pageData: any = usePageData()
</script>

<template>
  <div class="page">
    <img src="https://cdn.prod.website-files.com/619774fe2dd7c8476a3cc0ec/625913b925c635170b66aba1_Objectbay.svg" class="logo" />

    <div class="info">
      <h1>Invoice {{ pageData.invoiceNr }}</h1>
      <p>Invoice Date: {{ pageData.invoiceDate }}</p>
    </div>

    <div class="item header">
      <span>Art. Nr.</span>
      <span>Artikelbezeichnung</span>
      <span>Menge</span>
      <span>Betrag</span>
    </div>

    <div v-for="item in pageData.items" class="item">
      <span>{{ item.artNr }}</span>
      <span>{{ item.name }}</span>
      <span>{{ item.amount }} Stück</span>
      <span>{{ item.price }} EUR</span>
    </div>
    <p class="total">Total: {{ pageData.totalPrice }} EUR</p>
  </div>
</template>

<style lang="css">
.page {
  padding: 4rem;
}
.logo {
  width: 320px;
  margin-bottom: 4rem;
}
h1 {
  font-size: 2rem;
}
.info {
  margin-bottom: 4rem;
}
.item {
  display: flex;
  flex-direction: row;
}
.item.header {
  font-weight: bold;
}
.item > span {
  display: block;
  flex: 1;
  padding-block: 0.5rem;
  border-bottom: 1px solid;
}
.item > span:nth-child(n + 2) {
  text-align: right;
}
.total {
  float: right;
  font-weight: bold;
  padding-block: 0.5rem;
}
</style>
