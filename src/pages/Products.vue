<template>
  <div v-if="productsStore.loading">Kindly wait...</div>
  <div v-else>
    <div class="grid grid-cols-4 gap-4 p-4 ">
      <div v-for="product in productsStore.products" :key="product.id"
        class="rounded-xl shadow-lg p-4 grid gap-1 bg-white transform hover:scale-103 transition-transform duration-300 hover:cursor-pointer hover:shadow-xl">
        <div class="w-[200px] aspect-square m-auto flex items-center justify-center">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-contain rounded-md"
            loading="lazy" />
        </div>
        <h2 class="font-bold text-xl text-gray-800 ">{{ product.title }}</h2>
        <p class="text-sm text-gray-500 line-clamp-2">{{ product.description }}</p>
        <p class="text-green-700 font-bold text-lg">Price: ${{ product.price }}</p>
        <button
          class="mt-auto border bg-[#5521B5] hover:bg-[#441a93]  text-white p-2 rounded w-full hover:cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

import { useProductsStore } from "../store/products";

const productsStore = useProductsStore();



</script>
