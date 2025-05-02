<template>
  <div class="p-4 md:max-w-[500px] border border-gray-300 mx-auto rounded-md lg:relative top-20">
    <h2 class="font-medium text-xl text-center">Sign Up</h2>
    <form @submit.prevent="handleSubmit()" class="flex flex-col gap-2  text-lg">
      <label for="username" class="text-sm">Username:</label>
      <input type="text" id="username" v-model="username" placeholder="Enter your name"
        class="border border-gray-400 rounded-sm h-10 text-base pl-3  focus:border-[#5521B5] focus:outline-none" />
      <div v-if="usernameError" class="text-red-500 text-sm ">{{ usernameError }}.</div>

      <label for="email" class="text-sm">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Enter your email"
        class="border h-10  border-gray-400 rounded-sm text-base pl-3 focus:border-[#5521B5] focus:outline-none" />
      <div v-if="emailError" class="text-sm text-red-500">{{ emailError }}</div>

      <label for="password" class="text-sm">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password"
        class="border h-10  border-gray-400 rounded-sm text-base pl-3 focus:border-[#5521B5] focus:outline-none" />
      <div v-if="passwordError" class="text-sm text-red-500">{{ passwordError }}</div>

      <label for="passwordCheck" class="text-sm">Confirm Password:</label>
      <input type="password" id="passwordCheck" v-model="passwordCheck" placeholder="Confirm your password"
        class="border h-10  border-gray-400 rounded-sm text-base pl-3 focus:border-[#5521B5] focus:outline-none" />
      <div v-if="passwordCheckError" class="text-[12px] sm:text-sm text-red-500">{{ passwordCheckError }}</div>

      <button type="submit"
        class="border bg-[#5521B5] text-white px-4 py-2 rounded-md  flex items-center justify-center h-10 mt-2 hover:bg-[#3e1691] transform hover:scale-103 transition duration-100">Submit</button>
    </form>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'
import { watchDebounced } from '@vueuse/core'

const username = ref('')
const email = ref('')
const password = ref('')
const passwordCheck = ref('')
const toast = useToast()
const passwordError = ref('')
const usernameError = ref('')
const passwordCheckError = ref('')
const emailError = ref('')

const handleSubmit = () => {
  checkUsernameFormat();
  checkPasswordFormat();
  checkPasswordMatch();
  checkEmailFormat();

  if (!passwordError.value && !usernameError.value && !passwordCheckError.value && !emailError.value) {
    toast.success("Form submitted", { timeout: 1500, position: "top-right" })
  }

}

const checkUsernameFormat = () => {
  username.value = username.value.trim()
  if (username.value && /^[a-zA-Z0-9_-]{3,15}$/.test(username.value)) {
    usernameError.value = ""
  } else {
    usernameError.value = "Username must be 3-15 characters and only letters, numbers, _ or -."
  }
}

const checkPasswordFormat = () => {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  password.value = password.value.trim()
  if (password.value && passwordPattern.test(password.value)) {
    passwordError.value = ""
  } else {
    passwordError.value = "Min 8 chars, 1 uppercase, 1 number, 1 symbol."
  }
}

const checkPasswordMatch = () => {
  if (password.value !== passwordCheck.value) {
    passwordCheckError.value = "Passwords do not match."
  }
  else {
    passwordCheckError.value = ""
  }
}

const checkEmailFormat = () => {
  email.value = email.value.trim()
  if (email.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = ""
  } else {
    emailError.value = "Invalid email format."
  }
}

// watch(() => password.value, (newValue, oldValue) => {
//   checkPasswordFormat()
// })

// watch(() => username.value, (newValue, oldValue) => {
//   checkUsernameFormat()
// })

// watch(() => passwordCheck.value, (newValue, oldValue) => {
//   checkPasswordMatch()
// })

watchDebounced(username, () => {
  checkUsernameFormat()
}, { debounce: 300 })

watchDebounced(password, () => {
  checkPasswordFormat()
}, { debounce: 300 })

watchDebounced(email, () => {
  checkEmailFormat()
}, { debounce: 300 })


</script>


<style lang="scss" scoped></style>