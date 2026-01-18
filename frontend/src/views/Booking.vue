<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search for cars..." class="border border-gray-300 rounded-full px-3 py-2 mb-6 w-full"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
             v-for="car in cars.filter(car =>
                (car.brand?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                (car.model?.toLowerCase() || '').includes(searchQuery.toLowerCase()))"
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
            @click="handleBooking">
            Book now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
    searchQuery: '',
    cars: [
        { id: 1, brand: "Toyota", model: "Corolla", year: 2022, pricePerDay: 280, image: "https://media.toyota.com.br/9cfea197-d63d-48bd-adbc-5094142b2b60.jpeg" },
        { id: 2, brand: "Honda", model: "Civic", year: 2021, pricePerDay: 260, image: "https://image1.mobiauto.com.br/images/api/images/v1.0/285723747/transform/fl_progressive,f_webp,q_80" },
        { id: 3, brand: "Jeep", model: "Compass", year: 2023, pricePerDay: 350, image: "https://i0.statig.com.br/bancodeimagens/1v/61/ij/1v61ijxkzz77cpgqjh8mqsy5f.jpg" },
        { id: 4, brand: "Volkswagen", model: "T-Cross", year: 2020, pricePerDay: 240, image: "https://gurudoscarros.com.br/wp-content/uploads/2024/08/vwtcross_sense_2.jpg" },
        { id: 5, brand: "Chevrolet", model: "Onix", year: 2022, pricePerDay: 210, image: "https://garagem360.com.br/wp-content/uploads/2021/07/ChevroletOnixRS2022dianteira.jpg" },
        { id: 6, brand: "Fiat", model: "Uno Mille", year: 2002, pricePerDay: 80, image: "https://img2.icarros.com/dbimg/imgmodelo/0/269_4.jpg" },
    ]
    }
  },
  computed: {
  filteredCars() {
    const query = this.searchQuery.toLowerCase()

    return this.cars.filter(car => {
      const brand = car.brand?.toLowerCase() || ''
      const model = car.model?.toLowerCase() || ''

      return brand.includes(query) || model.includes(query)
    })
  }
 },
  methods: {
    handleBooking(carId) {
      const isAuthenticated = false; // Aqui você usaria a lógica do seu Pinia/Store

      if (isAuthenticated) {
        this.$router.push(`/checkout/${carId}`);
      } else {
        // Se não estiver logado, manda para o login 
        // mas avisa para onde ele deve voltar depois (query: { redirect: ... })
        this.$router.push({
          path: '/login',
          query: { redirect: `/checkout/${carId}` }
        });
      }
    }
  }
}
</script>
