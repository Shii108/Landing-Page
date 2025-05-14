<template>
  <div v-if="productsStore.cart.length > 0" class="border grid grid-cols-4 gap-4">
    <div v-for="product in productsStore.cart" :key="product.id" class="border">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      <Bomb color="gray" :size="25" />
    </div>
  </div>
  <div v-else class="border">
    <h2>WHAT AM I DO DISPLAY</h2>
  </div>
</template>


<script setup>

import { useProductsStore } from "../store/products";
import { Bomb } from "lucide-vue-next";

const productsStore = useProductsStore();

</script>

<style lang="scss" scoped></style>