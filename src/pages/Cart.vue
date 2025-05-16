<template>
  <!-- Cart items grid (shown when cart has items) -->
  <div v-if="productsStore.cart.length > 0" class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-md">
    <!-- Individual product card -->
    <div v-for="product in productsStore.cart" :key="product.id"
      class="p-4 shadow-sm rounded-md flex flex-col bg-white hover:shadow-md transition">
      <div class="flex flex-col gap-2">
        <p class="text-lg font-semibold text-gray-800">{{ product.title }}</p>
        <p class="text-green-700">Price: ${{ product.price }}</p>
        <div
          class="flex items-center gap-2 bg-gray-900 cursor-pointer py-1 px-2 w-max rounded-md hover:bg-red-700 transition duration-200"
          @click="productsStore.deleteItem(product.id)">
          <p class="font-medium text-white">Nuke it</p>
          <Bomb class="text-yellow-400" />
        </div>
      </div>
    </div>
  </div>

  <!-- Empty cart state -->
  <div v-else class="p-10 rounded-md bg-white flex flex-col items-center space-y-4">
    <img src="/empty.webp" alt="Sad cat staring at empty bowl"
      class="w-[500px] rounded-md border border-gray-300 shadow-sm" />
    <h2 class="text-xl text-gray-600 font-semibold">Nothing here yet 🥺</h2>
    <p class="text-mg text-gray-400 text-center">
      Your cart is as empty as that bowl... try adding something.
    </p>
  </div>
</template>

<script setup>
import { useProductsStore } from "../store/products";
import { Bomb } from "lucide-vue-next";
import { onMounted } from "vue"

const productsStore = useProductsStore();

// removeCookie();
onMounted(()=>{
  productsStore.getCookie();
})

</script>

<style lang="scss" scoped></style>