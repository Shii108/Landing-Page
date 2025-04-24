<template>
  <nav class="border flex justify-between p-1">
    <div class="flex gap-2 items-center">
      <div class="w-10"><img src="/Favicon.png" alt=""></div>
      <p class="font-semibold text-xl">Cappuccina</p>
    </div>
    <ul class="flex items-center gap-10 font-medium text-gray-700">
      <router-link class="hover:text-red-800" to="/">Home</router-link>
      <router-link class="hover:text-red-800" to="company">Company</router-link>
      <router-link class="hover:text-red-800" to="marketplace">Marketplace</router-link>
      <router-link class="hover:text-red-800" to="features">Features</router-link>
      <router-link class="hover:text-red-800" to="team">Team</router-link>
      <router-link class="hover:text-red-800" to="contact">Contact</router-link>
    </ul>
    <div>
      <button class="border bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">Download</button>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>