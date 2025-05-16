<template>
  <div class="p-4 md:flex items-center gap-2 sticky top-15 bg-white z-10">
    <!-- Search Bar -->
    <div class="flex items-center gap-2 mb-2 md:mb-0 w-full md:w-auto">
      <Search color="gray" :size="30" />
      <input type="text" class="border p-2 w-full text-sm md:text-base md:w-[450px] rounded-md" v-model="searchBar"
        placeholder="Search for Ballerina Capuchinaaa..." />
    </div>

    <!-- Sort Dropdown -->
    <div
      class="text-sm relative md:text-base p-2 text-black font-medium cursor-pointer transition"
      @click="toggleSort">
      <p class="flex items-center w-fit border p-2 rounded-md">
        Sort by: {{ productsStore.sortBy }}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showSort }"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </p>

      <!-- Sort Options -->
      <div v-if="showSort"
        class="flex flex-col gap-2 absolute top-13 left-1 md:w-full w-[130px] bg-white border rounded-md shadow-md z-10 transition-opacity duration-200 p-2">
        <button class="text-sm md:text-base p-2 rounded-md hover:bg-[#f5f0ff] transition w-full"
          @click="() =>productsStore.sortMin()">
          Min
        </button>
        <button class="text-sm md:text-base p-2 rounded-md hover:bg-[#f5f0ff] transition w-full"
          @click="() =>productsStore.sortMax()">
          Max
        </button>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-if="productsStore.loading">Kindly wait...</div>

  <!-- Products Grid -->
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div v-for="product in filteredProducts" :key="product.id"
        class="rounded-xl shadow-lg p-4 grid gap-1 bg-white transform hover:scale-103 transition-transform duration-300 hover:cursor-pointer hover:shadow-xl">
        <div class="w-[200px] aspect-square m-auto flex items-center justify-center">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-contain rounded-md"
            loading="lazy" />
        </div>
        <h2 class="font-bold text-gray-800">{{ product.title }}</h2>
        <p class="text-sm text-gray-500 line-clamp-2">{{ product.description }}</p>
        <p class="text-green-700 font-bold">Price: ${{ product.price }}</p>
        <button @click="productsStore.addToCart(product.title, product.price, product.id)"
          class="mt-auto border bg-[#5521B5] hover:bg-[#441a93] text-white p-2 rounded w-full">
          Add to cart
        </button>
      </div>
    </div>
  </div>

  <!-- No Products Message -->
  <div v-if="filteredProducts.length === 0" class="text-center text-gray-500">
    No products found.
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { Search } from "lucide-vue-next";
import { useProductsStore } from "../store/products";

const searchBar = ref("");
const showSort = ref(false);

const toggleSort = () => {
  showSort.value = !showSort.value;
};

const productsStore = useProductsStore();

onBeforeMount(() => {
  productsStore.fetchProducts();
});

const filteredProducts = computed(() => {
  return productsStore.products.filter((product) =>
    product.title.toLowerCase().startsWith(searchBar.value.toLowerCase())
  );
});
</script>
