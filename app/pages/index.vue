<script setup lang="ts">
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
  <div class="bg-[#f0f5f8] border-[#cecfd1] border-solid border-1 rounded-lg w-auto m-3 p-5 flex flex-col gap-4">
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

    <div class="text-lg font-bold">
      Total Cost: €{{ proizvodi.reduce((total, proizvod) => total + (proizvod.cijena * proizvod.kolicina), 0).toFixed(2) }}
    </div>

  </div>
</template>