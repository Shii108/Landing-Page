<template>
  <nav class="border flex justify-between py-2 top-0 sticky z-100 bg-white">
    <div class="flex gap-2 items-center">
      <div class="w-10"><img src="/Favicon.png" alt=""></div>
      <p class="font-semibold text-xl">Cappuccina</p>
    </div>
    <ul class="flex items-center gap-10 font-medium text-gray-700">
      <router-link class="hover:text-[#5521B5]" to="/">Home</router-link>
      <router-link class="hover:text-[#5521B5]" to="company">Company</router-link>
      <router-link class="hover:text-[#5521B5]" to="marketplace">Marketplace</router-link>
      <router-link class="hover:text-[#5521B5]" to="features">Features</router-link>
      <router-link class="hover:text-[#5521B5]" to="team">Team</router-link>
      <router-link class="hover:text-[#5521B5]" to="contact">Contact</router-link>
    </ul>
    <div>
      <button class="border bg-[#5521B5] text-white px-4 py-2 rounded-md font-semibold">Download</button>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>