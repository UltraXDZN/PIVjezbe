<script setup lang="ts">
import { ref } from 'vue'
import type { Item } from '~/types'

import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'


let items = ref<Item[]>([
  { id: 0, name: 'Proizvod 1', quantity: 1, price: 1.00, remove: () => removeItem(0), increment: () => incrementItem(0), decrement: () => decrementItem(0) },
  { id: 1, name: 'Proizvod 2', quantity: 1, price: 2.00, remove: () => removeItem(1), increment: () => incrementItem(1), decrement: () => decrementItem(1) },
  { id: 2, name: 'Proizvod 3', quantity: 3, price: 3.00, remove: () => removeItem(2), increment: () => incrementItem(2), decrement: () => decrementItem(2) },
]);

let curNewName = ref<string>('');
let curNewPrice = ref<number>(0.00);

function addItem(name: string, price: number) {
  const newItem: Item = {
    id: items.value.length,
    name: name,
    quantity: 1,
    price: price,
    remove: () => removeItem(items.value.length),
    increment: () => incrementItem(items.value.length),
    decrement: () => decrementItem(items.value.length)
  };

  const existingItem = items.value.find(item => item.name === newItem.name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    items.value.push(newItem);
    Toastify({
      text: "Added new item",
      duration: 1000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #4caf50, #8bc34a)"
    }).showToast();
  }

  curNewName.value = '';
  curNewPrice.value = 0.00;
}

function removeItem(id: number) {
  items.value = items.value.filter(item => item.id !== id);
  console.log(`Item with id ${id} removed`);
}

function incrementItem(id: number) {
  const item = items.value.find(item => item.id === id);
  item!.quantity++;
}

function decrementItem(id: number) {
  const item = items.value.find(item => item.id === id);
  item!.quantity--;
}

</script>

<template>
  <OuterCard>
    <h1 class="text-3xl font-bold">
      Košarica
    </h1>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="flex flex-col md:flex-row items-center justify-between gap-3 h-auto mx-10">
      <div class="flex flex-col md:flex-row items-center justify-center gap-3 h-full">
        <h2 class="text-md font-bold self-center">
          Naziv proizvoda
        </h2>
        <input v-model="curNewName" class="p-2 bg-white text-[#9fa2ae] border-1 border-[#e9e9e9] rounded-lg self-center"
          type="text" placeholder="Upiši naziv proizvoda..." />
      </div>
      <div class="flex flex-col md:flex-row items-center justify-center gap-3 h-full">
        <h2 class="text-md font-bold self-center">
          Cijena proizvoda
        </h2>
        <input v-model="curNewPrice"
          class="p-2 bg-white text-[#9fa2ae] border-1 border-[#e9e9e9] rounded-lg self-center" type="number" step="0.01"
          placeholder="1" />
      </div>
      <button
        class="bg-[#4caf50] p-2 px-4 rounded-lg hover:bg-[#388e3c] disabled:bg-[#d6e9d1] text-black transition duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer self-center disabled:cursor-not-allowed"
        :disabled="curNewName.length === 0 || (curNewPrice <= 0 && !items.some(item => item.name === curNewName))"
        @click="addItem(curNewName, curNewPrice)">
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
        <div v-for="(item, i) in items" :key="i" :class="i % 2 === 0 ? 'bg-[#f3f2f3]' : 'bg-[#ebeaeb]'">
          <CartItem
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :quantity="item.quantity"
            @update:quantity="qty => item.quantity = qty"
            @remove="removeItem" />
        </div>
      </div>
    </div>
    <hr class="border-[#cee0ed] border-1 rounded-full" />
    <div class="flex flex-row gap-3">
      <h2 class="text-md font-bold text-center text-uppercase">
        Ukupno:
      </h2>
      <span>
        {{items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}}
        <span class="text-md font-bold text-center text-uppercase">
          €
        </span>
      </span>
    </div>
  </OuterCard>
</template>