<script setup lang="ts">
const props = defineProps<{
  items: CartItemList;
}>();
const emit = defineEmits(["update:quantity", "removeItem"]);

function handleQuantityUpdate(id: number, qty: number) {
  let fid = props.items.findIndex((item: Item) => item.id === id);
  const item = props.items[fid];
  if (item) {
    item.quantity = qty;
  }
}

function handleRemove(id: number) {
  let fid = props.items.findIndex((item: Item) => item.id === id);
  props.items.splice(fid, 1);
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
          :item="item"
          @update:quantity="(qty) => handleQuantityUpdate(item.id, qty)"
          @remove="handleRemove"
        />
      </div>
    </div>
  </div>
</template>
