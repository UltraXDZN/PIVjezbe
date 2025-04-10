<script setup lang="ts">
import { ref } from 'vue'
import type { Korisnik, Proizvod, SlikeMap } from '~/types'
import { useProizvodi } from '~/composables/useProizvodi'

const slike = ref<SlikeMap>({
  "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
  "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
  "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
  "Kruh": "https://www.svgrepo.com/show/530223/bread.svg"
});

const korisnik = ref<Korisnik>({
  ime: "Marko",
  adresa: "Veruda 32, Pula",
  telefon: "+091-123-456",
  admin: true,
});

const { proizvodi, sveukupnaCijena, najskupljaStavka, isNajskuplja, increaseQuantity } = useProizvodi();
</script>

<template>
  <CardContainer>
    <h1 class="text-xl font-bold text-left" :class="korisnik.admin ? 'text-[#1072ad]' : 'text-black'">
      Korisnički podaci
    </h1>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="flex flex-col text-md" :class="korisnik.admin ? 'text-[#1072ad]' : 'text-black'">
      <Details label="Ime" :value="korisnik.ime" />
      <Details label="Adresa" :value="korisnik.adresa" />
      <Details label="Telefon" :value="korisnik.telefon" />
    </div>
  </CardContainer>

  <CardContainer>
    <FruitCard 
      :proizvod="proizvodi[0]!" 
      :slikaUrl="slike[proizvodi[0]!.naziv]"
      :isNajskuplja="isNajskuplja(proizvodi[0]!.naziv)" 
      @click="increaseQuantity(proizvodi[0]!)" 
    />
    <FruitCard 
      :proizvod="proizvodi[1]!" 
      :slikaUrl="slike[proizvodi[1]!.naziv]"
      :isNajskuplja="isNajskuplja(proizvodi[1]!.naziv)" 
      @click="increaseQuantity(proizvodi[1]!)" 
    />
    <FruitCard 
      :proizvod="proizvodi[2]!" 
      :slikaUrl="slike[proizvodi[2]!.naziv]"
      :isNajskuplja="isNajskuplja(proizvodi[2]!.naziv)" 
      @click="increaseQuantity(proizvodi[2]!)" 
    />
    <FruitCard 
      :proizvod="proizvodi[3]!" 
      :slikaUrl="slike[proizvodi[3]!.naziv]"
      :isNajskuplja="isNajskuplja(proizvodi[3]!.naziv)" 
      @click="increaseQuantity(proizvodi[3]!)" 
    />

    <div class="flex flex-row gap-2 align-middle mt-4">
      <span class="text-lg font-bold">
        Ukupna cijena:
      </span>
      <span class="text-lg">
        €{{ sveukupnaCijena.toFixed(2) }}
      </span>
    </div>
    
  </CardContainer>
</template>