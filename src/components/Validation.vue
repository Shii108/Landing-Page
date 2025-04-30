<template>
  <div class="p-4 lg:max-w-[800px] md:max-w-[600px] border mx-auto">
    <h2 class="font-medium text-[clamp(1.625rem,1.393rem+0.54vw,1.875rem)] text-center">Sign Up</h2>
    <form @submit.prevent="handleSubmit()" class="flex flex-col gap-2 outline">
      <label for="username" class="text-xl">Username:</label>
      <input type="text" id="username" v-model="username" placeholder="Enter your name" class="border" required />
      <div v-if="isValidUsername" class="text-red-500 text-sm">Username must be 3–15 characters and only letters,
        numbers, _ or -.</div>

      <label for="email" class="text-xl">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Enter your email" class="border" required />

      <label for="password" class="text-xl">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password" class="border" required />
      <div v-if="isValidPassword" class="text-sm text-red-500">Min 8 chars, 1 uppercase, 1 number, 1 symbol.</div>

      <label for="passwordCheck" class="text-xl">Confirm Password:</label>
      <input type="password" id="passwordCheck" v-model="passwordCheck" placeholder="Confirm your password" class="border" required />
      <div v-if="isPasswordMatch" class="text-sm text-red-500">Password don't match try again</div>

      <button type="submit" class="border">Submit</button>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const username = ref('')
const email = ref('')
const password = ref('')
const passwordCheck = ref('')
const isValidUsername = ref(false)
const isValidPassword = ref(false)
const isPasswordMatch = ref(false)
const toast = useToast()

const handleSubmit = () => {
  checkUsernameFormat();
  checkPasswordFormat();
  checkPasswordMatch();

  if (isValidUsername.value || isValidPassword.value || isPasswordMatch.value) {
    return;
  }
  toast.success("From submitted", { timeout: 1500, position: "top-right" })
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