<script setup lang="ts">
const props = defineProps<{
  item: Item;
}>();
const emit = defineEmits(["update:quantity", "remove"]);
const total = computed(() => props.item.price * props.item.quantity);

function increaseQuantity() {
  emit("update:quantity", props.item.quantity + 1);
}

function decreaseQuantity() {
  if (props.item.quantity > 1) {
    emit("update:quantity", props.item.quantity - 1);
  }
}

function removeItem() {
  emit("remove", props.item.id);
}
</script>

<template>
  <div class="flex flex-row items-center justify-between p-2 px-4">
    <h2 class="text-md w-1/5 text-center font-bold">
      {{ item.name }}
    </h2>
    <div class="flex w-1/5 flex-row items-center justify-center gap-2">
      <button
        class="cursor-pointer text-xl font-bold"
        @click="decreaseQuantity"
      >
        -
      </button>
      <h2
        class="rounded-lg border-2 border-[#e2e2e2] bg-[#f4f5f4] px-5 py-2 text-center"
      >
        {{ item.quantity }}
      </h2>
      <button
        class="cursor-pointer text-xl font-bold"
        @click="increaseQuantity"
      >
        +
      </button>
    </div>
    <h2 class="text-md w-1/5 text-center">{{ item.price.toFixed(2) }} €</h2>
    <h2 class="text-md w-1/5 text-center">{{ total.toFixed(2) }} €</h2>
    <h2
      class="text-md w-1/5 cursor-pointer text-center transition duration-300 ease-in-out hover:text-[#f44336]"
      @click="removeItem"
    >
      Ukloni
    </h2>
  </div>
</template>
