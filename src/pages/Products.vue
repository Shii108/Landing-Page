<template>
  <div class="border p-4 flex items-center gap-2">
    <div class="inline-block border p-2">
      <Search color="gray" :size="27" />
    </div>
    <input type="text" class="border p-2" v-model="searchBar" placeholder="Search for products..." />
    <span class="border p-2 text-gray-900">Sort by:</span>
    <button class="border border-red-200 p-2  cursor-pointer" @click="productsStore.sortMin">Min</button>
    <button class="border border-red-300 p-2  cursor-pointer" @click="productsStore.sortMax">Max</button>
  </div>
  <div v-if="productsStore.loading">Kindly wait...</div>
  <div v-else>
    <div class="grid grid-cols-4 gap-4 p-4 ">
      <div v-for="product in filteredProducts" :key="product.id"
        class="rounded-xl shadow-lg p-4 grid gap-1 bg-white transform hover:scale-103 transition-transform duration-300 hover:cursor-pointer hover:shadow-xl">
        <div class="w-[200px] aspect-square m-auto flex items-center justify-center">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-contain rounded-md"
            loading="lazy" />
        </div>
        <h2 class="font-bold  text-gray-800 ">{{ product.title }}</h2>
        <p class="text-sm text-gray-500 line-clamp-2">{{ product.description }}</p>
        <p class="text-green-700 font-bold">Price: ${{ product.price }}</p>
        <button @click="productsStore.addToCart(product.title, product.price, product.id)"
          class="mt-auto border bg-[#5521B5] hover:bg-[#441a93]  text-white p-2 rounded w-full hover:cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <div v-if="filteredProducts.length === 0" class="text-center text-gray-500">
    No products found.
  </div>
</template>
<script setup>

import { Search } from "lucide-vue-next";

import { useProductsStore } from "../store/products";
import { computed, ref, watch } from "vue";

const productsStore = useProductsStore();
const searchBar = ref("");

// watch(() => searchBar.value, (newValue, oldValue) => {
//   console.log(newValue);
// })

const filteredProducts = computed(() => {
  return productsStore.products.filter((product) => {
    return product.title.toLowerCase().startsWith(searchBar.value.toLowerCase());
  });
});


</script>
