<template>
  <div class="p-4">
    <form @submit.prevent="handleSubmit" class="flex flex-col outline">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" placeholder="Enter your name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Enter your email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password" required />

      <label for="passwordCheck">Confirm Password:</label>
      <input type="password" id="passwordCheck" v-model="passwordCheck" placeholder="Confirm your password" required />

      <button type="submit" class="border">Submit</button>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const passwordCheck = ref('')

const handleSubmit = () => {
  if (username.value && /^[a-zA-Z0-9_-]{3,15}$/.test(username.value)) {
    console.log('valid username');
  } else {
    console.log('not valid username');
    return;
  }

  if (password.value !== passwordCheck.value) {
    console.log("passwords do not match")
    return;
  }
  console.log("form submitted successfully");
}

</script>


<style lang="scss" scoped></style>