<template>
  <div class="container-mine">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "../src/store/products.js";

const productsStore = useProductsStore();
onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<style lang="scss" scoped></style>