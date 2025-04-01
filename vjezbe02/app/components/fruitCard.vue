<script setup lang="ts">
import { useProizvodi } from '~/composables/useProizvodi';
import type { Proizvod } from '~/types';

const { dohvatiCijenu } = useProizvodi();

defineProps<{
  proizvod: Proizvod;
  slikaUrl: string;
  isNajskuplja: boolean;
}>();
</script>

<template>
  <div class="bg-[#f8fbfd] border-[#bcc9d6] border-solid border-2 rounded-lg p-4 flex flex-row gap-4
                hover:bg-[#1072ad]/10 hover:border-[#1072ad]/10 transition duration-300 ease-in-out cursor-pointer"
    :class="isNajskuplja ? 'bg-[#fff0f3] border-[#f04c76] ' : 'border-[#bcc9d6]'">
    <img :src="slikaUrl" :alt="proizvod.naziv" class="w-16 h-16 object-contain" />
    <div class="flex flex-col justify-center">
      <h2 class="text-md font-bold">
        {{ proizvod.naziv }}
      </h2>
      <div class="flex flex-row gap-2 text-sm font-semibold">
        <span>
          Cijena: €{{ dohvatiCijenu(proizvod.naziv).toFixed(2) }}
        </span>
        <span>|</span>
        <span>
          Količina: {{ proizvod.kolicina }}
        </span>
      </div>
      <span class="text-sm font-semibold">
        Ukupno: €{{ (proizvod.cijena * proizvod.kolicina).toFixed(2) }}
      </span>
    </div>
  </div>
</template>