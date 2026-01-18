<template>
    <div class="container">
        <h2>Book your car now</h2>
        <form>
            <!--nome-->
            <div>
                <label>Nome completo</label>
                <input 
                v-model="nome"
                type="text"
                placeholder="Digite seu nome"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"/>
            </div>
            <!--telefone-->
            <div>
                <label>Telefone com DDD</label>
                <input 
                v-model="telefone"
                type="tel"
                placeholder="(DDD) 99990-9999)"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"/>
            </div>
            <!--carro-->
            <div>
                <label>Carro escolhido</label>
                <select>
                    <option>Selecione um carro</option>
                    <option>Toyota Corolla</option>
                    <option>Honda Civic</option>
                    <option>Jeep Compass</option>
                    <option>Chevrolet Onix</option>
                    <option>Volkswagen  T-Cross</option>
                    <option>Fiat uno mille</option>
                </select>
            </div>
            <!--data-->
            <!--horario-->
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const mensagem = ref ('Texto teste script')
</script>