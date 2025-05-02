<template>
  <div v-if="productsStore.loading">Kindly wait...</div>
  <div v-else>
    <div class="grid grid-cols-4 gap-4 p-4">
      <div v-for="product in productsStore.products" :key="product.id"
        class="border rounded-xl shadow p-4 grid gap-1 bg-white transform hover:scale-103 transition-transform duration-300 hover:cursor-pointer">
        <img :src="product.thumbnail" :alt="product.title" class="rounded-md w-[230px] m-auto" />
        <h2 class="font-bold text-lg">{{ product.title }}</h2>
        <p class="text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>
        <p class="text-blue-700 font-semibold">Price: ${{ product.price }}</p>
        <button class="mt-auto border bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full hover:cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

import { onMounted } from "vue";
import { useProductsStore } from "../store/products";

const productsStore = useProductsStore();

</script>
