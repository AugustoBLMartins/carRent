<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
    <h1 class="text-5xl font-bold mb-4 animate-pulse">
      Register
    </h1>
        <div class="flex flex-col">
            <P class="text-lg opacity-90 text-center font-bold">
                Full Name:
            </P>
            <input type="text"
            v-model="fullName"
            placeholder="Full Name"
            class="border border-gray-300 rounded-full px-3 py-2"
            />
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
            <p class="text-lg opacity-90 text-center font-bold">
            Confirm Password:
            </p>
            <input type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            class="border border-gray-300 rounded-full px-3 py-2"
            />
            <p class="text-lg opacity-90 text-center font-bold">
            Adreess:
            </p>
            <input type="text"
            v-model="address"
            placeholder="Address,number"
            class="border border-gray-300 rounded-full px-3 py-2"
            />
            <p class="text-lg opacity-90 text-center font-bold">
                City/State:
            </p>
            <input type="text"
            v-model="cityState" 
            placeholder="City/State"
            class="border border-gray-300 rounded-full px-3 py-2"   
            />
            <p class="text-lg opacity-90 text-center font-bold">
            Phone Number:   
            </p>
            <input type="text"
            v-model="phoneNumber"
            placeholder="Phone Number"
            class="border border-gray-300 rounded-full px-3 py-2"
            />
            <button
            class="mt-6 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition"
            @click="performRegister">
                Register
            </button>
            <router-link to="/Login" class="mt-4 text-center text-sm text-white underline hover:text-gray-200">
                Already have an account? Login here.
            </router-link>
        </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const contador = ref(0)

export default {
  name: 'Register',
  data() {
  },
  methods: {
  async performRegister() {
    // chamada da API
    
    // Após logar com sucesso:
    const destination = this.$route.query.redirect || '/Cars'; 
    this.$router.push(destination);
  }
}
}

</script>
