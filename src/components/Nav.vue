<template>
  <nav class="flex justify-between  py-2 top-0 sticky z-100 bg-white p-4">
    <div class="flex gap-1 md:gap-2 items-center cursor-pointer" @click="goToHome()">
      <div class="w-10"><img src="/Favicon.png" alt=""></div>
      <p class="font-semibold text-xl">Cappuccina</p>
    </div>
    <ul class="lg:flex hidden items-center gap-10 font-medium text-gray-700">
      <router-link class="hover:text-[#5521B5]" to="/">Home</router-link>
      <router-link class="hover:text-[#5521B5]" to="company">Company</router-link>
      <router-link class="hover:text-[#5521B5]" to="validation">Sign Up</router-link>
      <router-link class="hover:text-[#5521B5]" to="products">Products</router-link>
    </ul>

    <div class="flex md:gap-4 items-center  ">
      <div>
        <button
          class="border hidden md:block tracking-wider bg-[#5521B5] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#3e1691] transform hover:scale-103 transition duration-100 cursor-pointer">Testing</button>
      </div>
      <div class="cursor-pointer relative" @click="router.push('/cart')">
        <div class="w-[45px]"><img src="/nav/cart.png" alt="a shopping cart"></div>
        <div class="absolute -top-2 -right-1 text-base md:text-lg ">{{ productsStore.itemIncart }}</div>
      </div>
      <div class="md:hidden flex flex-col ">
        <button @click="isOpen = !isOpen">
          <svg class="h-8 w-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div class="fixed bg-white z-100 top-13 px-4 lg:hidden "
    :class="{ 'h-full w-full transition-all opacity-100': !isOpen, ' transition-all h-0 w-0 opacity-0': isOpen }">
    <ul class="flex flex-col mt-2  gap-6 text-2xl font-medium text-gray-700">
      <router-link class="hover:text-[#5521B5]" to="/" @click="isOpen = !open">Home</router-link>
      <router-link class="hover:text-[#5521B5]" to="company" @click="isOpen = !open">Company</router-link>
      <router-link class="hover:text-[#5521B5]" to="validation" @click="isOpen = !open">Sign Up</router-link>
      <router-link class="hover:text-[#5521B5]" to="products" @click="isOpen = !open">Products</router-link>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useProductsStore } from "../store/products";

const isOpen = ref(false)
const router = useRouter()
const route = useRoute()
const productsStore = useProductsStore();


const goToHome = () => {
  router.push('/')
  if (route.path == '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  else {
    window.scrollTo({
      top: 0,
    })
  }
}

</script>

<style lang="scss" scoped></style>