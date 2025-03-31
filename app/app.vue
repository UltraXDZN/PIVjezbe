<script setup lang="ts">
import { ref } from 'vue'
import type {
  Proizvod,
  SlikeMap
} from './types'

const slike = ref<SlikeMap>({
  "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
  "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
  "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
  "Kruh": "https://www.svgrepo.com/show/530223/bread.svg"
});

const proizvodi = ref<Proizvod[]>([
  { naziv: "Jabuka", cijena: 0.25 },
  { naziv: "Mrkva", cijena: 0.12 },
  { naziv: "Kruh", cijena: 2.00 },
  { naziv: "Sir", cijena: 4.48 }
]);
</script>

<template>
  <div>
    <h1 class="text-blue-500 text-lg bg-gray-200 p-2">
      {{ proizvodi[0].naziv }}
    </h1>
  </div>
</template>
