<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- NAVBAR -->
    <nav class="bg-white shadow p-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img :src="carRentIcon" alt="Ícone" class="h-10 w-10" />
        <h1 class="text-2xl font-bold text-blue-600"><router-link to="/">CarRent</router-link></h1>
      </div>

      <div class="space-x-4">
        <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
        <router-link to="/Cars" class="text-gray-700 hover:text-blue-600">Cars</router-link>
        <router-link to="/Login" class="text-gray-700 hover:text-blue-600">Login</router-link>
        <router-link to="/Admin" class="text-gray-700 hover:text-blue-600">Admin</router-link>
      </div>
    </nav>

    <!-- CONTEÚDO DA PÁGINA -->
    <main class="flex-grow p-6">
      <router-view />
    </main>

    <!-- RODAPÉ -->
    <footer class="bg-white shadow-inner text-center py-4 text-gray-600">
      <p>&copy; {{ new Date().getFullYear() }} CarRent - All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import carRentIcon from '@/assets/images/carRent.png';
</script>
