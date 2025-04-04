<script setup lang="ts">
import type { Item } from "~/types";

interface CartItemListProps {
  items: Item[];
}
const props = defineProps<CartItemListProps>();
const emit = defineEmits(["update:quantity", "removeItem"]);

function handleQuantityUpdate(id: number, qty: number) {
  emit("update:quantity", { id, qty });
}

function handleRemove(id: number) {
  emit("removeItem", id);
}
</script>

<template>
  <div class="h-full">
    <div>
      <div
        class="items-left flex flex-row justify-between p-2 px-4 text-center text-lg font-bold"
      >
        <h2 class="w-1/5">Naziv</h2>
        <h2 class="w-1/5">Količina</h2>
        <h2 class="w-1/5">Cijena</h2>
        <h2 class="w-1/5">Ukupno</h2>
        <h2 class="w-1/5" />
      </div>
    </div>
    <div class="flex-grow overflow-hidden rounded-lg">
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="i % 2 === 0 ? 'bg-[#f3f2f3]' : 'bg-[#ebeaeb]'"
      >
        <CartItem
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :quantity="item.quantity"
          @update:quantity="(qty) => handleQuantityUpdate(item.id, qty)"
          @remove="handleRemove"
        />
      </div>
    </div>
  </div>
</template>
