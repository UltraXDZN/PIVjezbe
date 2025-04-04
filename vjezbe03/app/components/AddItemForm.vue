<script setup lang="ts">
import type { Item } from "~/types";

interface AddItemFormProps {
  items: Item[];
}

const props = defineProps<AddItemFormProps>();
const emit = defineEmits(["addItem"]);

const productName = ref<string>("");
const productPrice = ref<number>(0.0);

const isDisabled = computed(
  () =>
    productName.value.length === 0 ||
    (productPrice.value <= 0 &&
      !props.items.some((item) => item.name === productName.value))
);

function submitForm() {
  emit("addItem", productName.value, productPrice.value);
  productName.value = "";
  productPrice.value = 0.0;
}
</script>

<template>
  <div
    class="mx-10 flex h-auto flex-col items-center justify-between gap-3 md:flex-row"
  >
    <FormInputField
      label="Naziv proizvoda"
      v-model="productName"
      placeholder="Upiši naziv proizvoda..."
    />

    <FormInputField
      label="Cijena proizvoda"
      v-model="productPrice"
      type="number"
      step="0.01"
      placeholder="1"
    />
    <button
      class="flex cursor-pointer items-center justify-center gap-2 self-center rounded-lg bg-[#4caf50] p-2 px-4 text-black transition duration-300 ease-in-out hover:bg-[#388e3c] disabled:cursor-not-allowed disabled:bg-[#d6e9d1]"
      :disabled="isDisabled"
      @click="submitForm"
    >
      Dodaj artikl
    </button>
  </div>
</template>
