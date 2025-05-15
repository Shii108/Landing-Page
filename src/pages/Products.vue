<template>
  <div class="p-4 md:flex items-center gap-2 sticky top-15 bg-white z-10">
    <div class="flex items-center gap-2 mb-2 md:mb-0">
      <Search color="gray" :size="30" />
      <input type="text" class="border p-2 w-full text-sm md:text-base md:w-[450px] rounded-md" v-model="searchBar"
        placeholder="Search for Ballerina Capuchinaaa..." />
    </div>
    <div class="flex gap-2  h-[35px] md:h-auto items-center">
      <span
        class="border text-sm md:text-base p-2 text-black font-medium rounded-md cursor-pointer hover:bg-gray-100 transition">
        Sort by:
      </span>
      <button class="border text-sm md:text-base border-[#5521b5] text-[#5521b5] p-2 rounded-md cursor-pointer hover:bg-[#f5f0ff] transition"
        @click="productsStore.sortMin">
        Min
      </button>
      <button class="border text-sm md:text-base border-[#5521b5] text-[#5521b5] p-2 rounded-md cursor-pointer hover:bg-[#f5f0ff] transition"
        @click="productsStore.sortMax">
        Max
      </button>
    </div>
  </div>

  <div v-if="productsStore.loading">Kindly wait...</div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
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
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";

const searchBar = ref("");

const productsStore = useProductsStore();
onBeforeMount(() => {
  productsStore.fetchProducts();
});

const filteredProducts = computed(() => {
  return productsStore.products.filter((product) => {
    return product.title.toLowerCase().startsWith(searchBar.value.toLowerCase());
  });
});


</script>
