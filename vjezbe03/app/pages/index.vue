<script setup lang="ts">
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

let items = ref<Item[]>([
  {
    id: 0,
    name: "Proizvod 1",
    quantity: 1,
    price: 1.0,
  },
  {
    id: 1,
    name: "Proizvod 2",
    quantity: 1,
    price: 2.0,
  },
  {
    id: 2,
    name: "Proizvod 3",
    quantity: 3,
    price: 3.0,
  },
]);

let curNewName = ref<string>("");
let curNewPrice = ref<number>(0.0);

function addItem(name: string, price: number) {
  const newItem: Item = {
    id: items.value.length,
    name: name,
    quantity: 1,
    price: price,
  };

  const existingItem = items.value.find((item) => item.name === newItem.name);
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
      backgroundColor: "linear-gradient(to right, #4caf50, #8bc34a)",
    }).showToast();
  }

  curNewName.value = "";
  curNewPrice.value = 0.0;
}
</script>

<template>
  <OuterCard>
    <h1 class="text-3xl font-bold">Košarica</h1>
    <SeparatorLine />
    <AddItemForm
      :items="items"
      @addItem="addItem"
    />
    <SeparatorLine />
    <CartItemList :items="items" />
    <SeparatorLine />
    <div class="flex flex-row gap-3">
      <h2 class="text-md text-uppercase text-center font-bold">Ukupno:</h2>
      <span>
        {{
          items
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)
        }}<span class="text-md text-uppercase text-center font-bold">€</span>
      </span>
    </div>
  </OuterCard>
</template>
