<script setup lang="ts">
interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const props = defineProps<CartItemProps>();
const emit = defineEmits(["update:quantity", "remove"]);
const total = computed(() => props.price * props.quantity);

function increaseQuantity() {
  emit("update:quantity", props.quantity + 1);
}

function decreaseQuantity() {
  if (props.quantity > 1) {
    emit("update:quantity", props.quantity - 1);
  }
}

function removeItem() {
  emit("remove", props.id);
}
</script>

<template>
  <div class="flex flex-row items-center justify-between p-2 px-4">
    <h2 class="text-md w-1/5 text-center font-bold">
      {{ name }}
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
        {{ quantity }}
      </h2>
      <button
        class="cursor-pointer text-xl font-bold"
        @click="increaseQuantity"
      >
        +
      </button>
    </div>
    <h2 class="text-md w-1/5 text-center">{{ price.toFixed(2) }} €</h2>
    <h2 class="text-md w-1/5 text-center">{{ total.toFixed(2) }} €</h2>
    <h2
      class="text-md w-1/5 cursor-pointer text-center transition duration-300 ease-in-out hover:text-[#f44336]"
      @click="removeItem"
    >
      Ukloni
    </h2>
  </div>
</template>
