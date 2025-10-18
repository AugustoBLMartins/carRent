<template>
  <div class="text-center">
    <!-- Carrossel -->
    <div class="relative overflow-hidden rounded-xl shadow-lg mb-8">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="image" class="w-full h-96 object-cover" />
        </div>
      </div>

      <!-- Setas de navegação -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>

    <!-- Texto institucional -->
    <section class="max-w-3xl mx-auto text-gray-700">
      <h2 class="text-3xl font-bold mb-4 text-blue-700">Bem-vindo à CarRent!</h2>
      <p class="text-lg leading-relaxed">
        Somos uma locadora de veículos moderna e eficiente, comprometida em oferecer a melhor
        experiência para nossos clientes. Aqui, você encontra uma ampla variedade de modelos — de
        carros econômicos a SUVs premium — com segurança, conforto e o melhor preço do mercado.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
       "https://media.toyota.com.br/9cfea197-d63d-48bd-adbc-5094142b2b60.jpeg",
       "https://image1.mobiauto.com.br/images/api/images/v1.0/285723747/transform/fl_progressive,f_webp,q_80",
       "https://i0.statig.com.br/bancodeimagens/1v/61/ij/1v61ijxkzz77cpgqjh8mqsy5f.jpg",
       "https://gurudoscarros.com.br/wp-content/uploads/2024/08/vwtcross_sense_2.jpg",
       "https://garagem360.com.br/wp-content/uploads/2021/07/ChevroletOnixRS2022dianteira.jpg",
       "https://img2.icarros.com/dbimg/imgmodelo/0/269_4.jpg"
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 5000); // muda a cada 5 segundos
    },
  },
};
</script>
