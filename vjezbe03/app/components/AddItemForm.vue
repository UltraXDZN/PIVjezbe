<script
    setup
    lang="ts"
>
import { ref, computed } from 'vue'
import type { Item } from '~/types'

interface AddItemFormProps {
    items: Item[];
}

const props = defineProps<AddItemFormProps>()
const emit = defineEmits(['addItem'])

const productName = ref<string>('')
const productPrice = ref<number>(0.00)

const isDisabled = computed(() => productName.value.length === 0 || (productPrice.value <= 0 && !props.items.some(item => item.name === productName.value)))
const isExistingItem = computed(() => props.items.some(item => item.name === productName.value));

function submitForm() {
    emit('addItem', productName.value, productPrice.value)
    productName.value = '';
    productPrice.value = 0.00;
}
</script>

<template>
<div class="flex flex-col md:flex-row items-center justify-between gap-3 h-auto mx-10">
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
        class="bg-[#4caf50] p-2 px-4 rounded-lg hover:bg-[#388e3c] disabled:bg-[#d6e9d1] text-black transition duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer self-center disabled:cursor-not-allowed"
        :disabled="isDisabled"
        @click="submitForm">
        Dodaj artikl
    </button>
</div>
</template>