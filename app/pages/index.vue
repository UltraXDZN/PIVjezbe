<script setup lang="ts">
import Card from '@nuxt/ui/runtime/components/Card.vue';
import { ref } from 'vue'
import type { Proizvod, SlikeMap } from '~/types'

const slike = ref<SlikeMap>({
  "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
  "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
  "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
  "Kruh": "https://www.svgrepo.com/show/530223/bread.svg"
});

const proizvodi = ref<Proizvod[]>([
  { naziv: "Jabuka", cijena: 0.25, kolicina: 1 },
  { naziv: "Mrkva", cijena: 0.12, kolicina: 3 },
  { naziv: "Kruh", cijena: 2.00, kolicina: 2 },
  { naziv: "Sir", cijena: 4.48, kolicina: 1 }
]);

const increaseQuantity = (proizvod : Proizvod) => {
  proizvod.kolicina++;
}

</script>

<template>
  <CardContainer>
    <h1 class="text-xl font-bold text-left text-[#1072ad]">
      Korisnički podaci
    </h1>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="flex flex-col text-md text-[#1072ad]">
      <Details label="Ime" value="Marko" />
      <Details label="Adresa" value="Veruda 32, Pula" />
      <Details label="Telefon" value="+091-123-456" />
    </div>
  </CardContainer>

  <CardContainer>
    <FruitCard 
      :proizvod="proizvodi[0]" 
      :slikaUrl="slike[proizvodi[0].naziv]"
      @click="increaseQuantity(proizvodi[0])"
    />
    <FruitCard 
      :proizvod="proizvodi[1]" 
      :slikaUrl="slike[proizvodi[1].naziv]" 
      @click="increaseQuantity(proizvodi[1])"
    />
    <FruitCard 
      :proizvod="proizvodi[2]" 
      :slikaUrl="slike[proizvodi[2].naziv]" 
      @click="increaseQuantity(proizvodi[2])"
    />
    <FruitCard 
      :proizvod="proizvodi[3]" 
      :slikaUrl="slike[proizvodi[3].naziv]" 
      @click="increaseQuantity(proizvodi[3])"
    />

    <div class="flex flex-row gap-2 align-middle">
      <span class="text-lg font-bold">
        Ukupna cijena: 
      </span>
      <span class="text-lg">
        €{{ proizvodi.reduce((total, proizvod) => total + (proizvod.cijena * proizvod.kolicina), 0).toFixed(2) }}
      </span>
    </div>
  </CardContainer>
</template>