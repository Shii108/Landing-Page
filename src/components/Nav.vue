<template>
  <!-- <nav class="border flex md:justify-between py-2 top-0 sticky z-100 bg-white p-4">
    <div class="flex gap-2 items-center max-[768px]:flex-1/2">
      <div class="w-10"><img src="/Favicon.png" alt=""></div>
      <p class="font-semibold text-xl">Cappuccina</p>
    </div>
    <ul class="lg:flex hidden items-center gap-10 font-medium text-gray-700">
      <router-link class="hover:text-[#5521B5]" to="/">Home</router-link>
      <router-link class="hover:text-[#5521B5]" to="company">Company</router-link>
      <router-link class="hover:text-[#5521B5]" to="marketplace">Marketplace</router-link>
      <router-link class="hover:text-[#5521B5]" to="features">Features</router-link>
      <router-link class="hover:text-[#5521B5]" to="team">Team</router-link>
      <router-link class="hover:text-[#5521B5]" to="contact">Contact</router-link>
    </ul>
    
    <div class="flex gap-4 items-center">
      <div>
        <button class="border bg-[#5521B5] text-white px-4 py-2 rounded-md font-semibold">Download</button>
      </div>
    <div class="lg:hidden block">
      <button @click="isOpen = !isOpen">
        <svg class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    </div>
  </nav> -->
  <router-view></router-view>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>