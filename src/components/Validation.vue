<template>
  <div class="p-4">
    <h2 class="font-medium">Sign Up</h2>
    <form @submit.prevent="handleSubmit()" class="flex flex-col outline">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" placeholder="Enter your name" required />
      <div v-if="isValidUsername" class="text-red-500 text-sm">Username must be 3–15 characters and only letters,
        numbers, _ or -.</div>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Enter your email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
      <div v-if="isValidPassword" class="text-sm text-red-500">Min 8 chars, 1 uppercase, 1 number, 1 symbol.</div>

      <label for="passwordCheck">Confirm Password:</label>
      <input type="password" id="passwordCheck" v-model="passwordCheck" placeholder="Confirm your password" required />
      <div v-if="isPasswordMatch" class="text-sm text-red-500">Password don't match try again</div>

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
const isValidUsername = ref(false)
const isValidPassword = ref(false)
const isPasswordMatch = ref(false)

const handleSubmit = () => {
  checkUsernameFormat();
  checkPasswordFormat();
  checkPasswordMatch();

  if (isValidUsername.value || isValidPassword.value || isPasswordMatch.value) {
    console.log('Form submission failed!');
    return; 
  }
  console.log('Form submitted successfully!');
}

const checkUsernameFormat = () => {
  if (username.value && /^[a-zA-Z0-9_-]{3,15}$/.test(username.value)) {
    isValidUsername.value = false;
  } else {
    isValidUsername.value = true;
  }
}

const checkPasswordFormat = () => {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (password.value && passwordPattern.test(password.value)) {
    isValidPassword.value = false;
  } else {
    isValidPassword.value = true;
  }
}

const checkPasswordMatch = () => {
  if (password.value !== passwordCheck.value) {
    isPasswordMatch.value = true;
  }
  else {
    isPasswordMatch.value = false;
  }
}

</script>


<style lang="scss" scoped></style>