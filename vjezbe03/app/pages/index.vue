<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <OuterCard>
    <h1 class="text-3xl font-bold">
      Košarica
    </h1>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="flex flex-col md:flex-row justify-center gap-3 h-auto">
      <div class="flex flex-col md:flex-row items-center justify-center gap-3 h-full">
        <h2 class="text-md font-bold self-center">
          Naziv proizvoda
        </h2>
        <input class="p-2 bg-white text-[#9fa2ae] border-1 border-[#e9e9e9] rounded-lg self-center" type="text"
          placeholder="Upiši naziv proizvoda..." />
      </div>
      <div class="flex flex-col md:flex-row items-center justify-center gap-3 h-full">
        <h2 class="text-md font-bold self-center">
          Cijena proizvoda
        </h2>
        <input class="p-2 bg-white text-[#9fa2ae] border-1 border-[#e9e9e9] rounded-lg self-center" type="number"
          step="0.01" placeholder="1" />
      </div>
      <button
        class="bg-[#4caf50] p-2 px-4 rounded-lg hover:bg-[#388e3c] disabled:bg-[#d6e9d1] text-black transition duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer self-center disabled:cursor-not-allowed">
        Dodaj artikl
      </button>
    </div>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="h-full">
      <div>
        <div class="flex flex-row justify-between items-left p-2 px-4 text-lg font-bold text-center">
          <h2 class="w-1/5">
            Naziv
          </h2>
          <h2 class="w-1/5">
            Količina
          </h2>
          <h2 class="w-1/5">
            Cijena
          </h2>
          <h2 class="w-1/5">
            Ukupno
          </h2>
          <h2 class="w-1/5" />
        </div>
      </div>
      <div class="rounded-lg overflow-hidden flex-grow">
        <div v-for="i in 4" :key="i" :class="i % 2 === 0 ? 'bg-[#f3f2f3]' : 'bg-[#ebeaeb]'">
          <div class="flex flex-row justify-between items-center p-2 px-4">
            <h2 class="text-md font-bold text-center w-1/5">
              Proizvod {{ i }}
            </h2>
            <div class="flex flex-row items-center justify-center gap-2 w-1/5">
              <button class="font-bold cursor-pointer text-xl">
                -
              </button>
              <h2 class="bg-[#f4f5f4] px-5 py-2 rounded-lg text-center border-[#e2e2e2] border-2">
                1
              </h2>
              <button class="cursor-pointer text-xl font-bold">
                +
              </button>
            </div>
            <h2 class="text-md text-center w-1/5">
              {{ (i * 1.00).toFixed(2) }} €
            </h2>
            <h2 class="text-md text-center w-1/5">
              {{ (i * 1.00).toFixed(2) }} €
            </h2>
            <h2
              class="text-md text-center w-1/5 cursor-pointer hover:text-[#f44336] transition duration-300 ease-in-out">
              Ukloni
            </h2>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="flex flex-row gap-3">
      <h2 class="text-md font-bold text-center text-uppercase">
        Ukupno:
      </h2>
      <span>
        12.92
        <span class="text-md font-bold text-center text-uppercase">
          €
        </span>
      </span>
    </div>

  </OuterCard>
</template>