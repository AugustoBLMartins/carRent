<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- NAVBAR -->
    <nav class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600">🚗 CarRent</h1>
      <div class="space-x-4">
        <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
        <router-link to="/login" class="text-gray-700 hover:text-blue-600">Login</router-link>
        <router-link to="/admin" class="text-gray-700 hover:text-blue-600">Admin</router-link>
      </div>
    </nav>

    <!-- CONTEÚDO -->
    <main class="flex-grow p-6">
      <h2 class="text-3xl font-semibold mb-6 text-gray-800">Carros Disponíveis</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="car in cars"
          :key="car.id"
          class="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
        >
          <img
            :src="car.image"
            :alt="car.model"
            class="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 class="text-lg font-semibold">{{ car.brand }} - {{ car.model }}</h3>
          <p class="text-gray-600 mb-2">Ano: {{ car.year }}</p>
          <p class="text-blue-600 font-bold mb-3">R$ {{ car.pricePerDay }} / dia</p>
          <button
            class="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reservar
          </button>
        </div>
      </div>
    </main>

    <!-- RODAPÉ -->
    <footer class="bg-white shadow-inner text-center py-4 text-gray-600">
      <p>&copy; {{ new Date().getFullYear() }} CarRent - Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {
          id: 1,
          brand: "Toyota",
          model: "Corolla",
          year: 2022,
          pricePerDay: 280,
          image:
            "https://media.toyota.com.br/9cfea197-d63d-48bd-adbc-5094142b2b60.jpeg",
        },
        {
          id: 2,
          brand: "Honda",
          model: "Civic",
          year: 2021,
          pricePerDay: 260,
          image:
            "https://image1.mobiauto.com.br/images/api/images/v1.0/285723747/transform/fl_progressive,f_webp,q_80",
        },
        {
          id: 3,
          brand: "Jeep",
          model: "Compass",
          year: 2023,
          pricePerDay: 350,
          image:
            "https://i0.statig.com.br/bancodeimagens/1v/61/ij/1v61ijxkzz77cpgqjh8mqsy5f.jpg",
        },
        {
          id: 4,
          brand: "Volkswagen",
          model: "T-Cross",
          year: 2020,
          pricePerDay: 240,
          image:
            "https://www.autoo.com.br/fotos/2019/2/1280_960/volkswagen_t-cross_2020_1_21022019_11764_1280_960.jpg",
        },
        {
          id: 5,
          brand: "Chevrolet",
          model: "Onix",
          year: 2022,
          pricePerDay: 210,
          image:
            "https://garagem360.com.br/wp-content/uploads/2021/07/ChevroletOnixRS2022dianteira.jpg",
        },
      ],
    };
  },
};
</script>
