<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
    <h1 class="text-5xl font-bold mb-4 animate-pulse">
      Login
    </h1>
        <div class="flex flex-col">
            <p class="text-lg opacity-90 text-center font-bold">
            E-mail:
            </p>
            <input type="e-mail"
            v-model="email"
            placeholder="E-mail"
            class="border border-gray-300 rounded-full px-3 py-2"
            />
            <p class="text-lg opacity-90 text-center font-bold">
            Password:
            </p>
            <input type="password"
            v-model="password"
            placeholder="Password"
            class="border border-gray-300 rounded-full px-3 py-2"
            />
            <button
            class="mt-6 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition"
            @click="performLogin">
                Enter
            </button>
            <router-link to="/register" class="mt-4 text-center text-sm text-white underline hover:text-gray-200">
                Don't have an account? Register here.
            </router-link>
        </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const contador = ref(0)

export default {
  name: 'Login',
  data() {
  },
  methods: {
  async performLogin() {
    // chamada da API
    
    // Após logar com sucesso:
    const destination = this.$route.query.redirect || '/dashboard'; 
    this.$router.push(destination);
  }
}
}

</script>
