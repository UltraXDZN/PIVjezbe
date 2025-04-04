<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

interface CartItemProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const props = defineProps<CartItemProps>();
const emit = defineEmits(['update:quantity', 'remove'])
const total = computed(() => props.price * props.quantity);

function increaseQuantity(){
    emit('update:quantity', props.quantity + 1);
}

function decreaseQuantity(){
    if (props.quantity > 1){
        emit('update:quantity', props.quantity - 1);
    }
}

function removeItem(){
    emit('remove', props.id);
}
</script>

<template>
    <div class="flex flex-row justify-between items-center p-2 px-4">
        <h2 class="text-md font-bold text-center w-1/5">
            {{ name }}
        </h2>
        <div class="flex flex-row items-center justify-center gap-2 w-1/5">
            <button class="font-bold cursor-pointer text-xl"
                    @click="decreaseQuantity">
                -
            </button>
            <h2 class="bg-[#f4f5f4] px-5 py-2 rounded-lg text-center border-[#e2e2e2] border-2">
                {{ quantity }}
            </h2>
            <button class="cursor-pointer text-xl font-bold"
                    @click="increaseQuantity">
                +
            </button>
        </div>
        <h2 class="text-md text-center w-1/5">
            {{ price.toFixed(2) }} €
        </h2>
        <h2 class="text-md text-center w-1/5">
            {{ total.toFixed(2) }} €
        </h2>
        <h2 class="text-md text-center w-1/5 cursor-pointer hover:text-[#f44336] transition duration-300 ease-in-out"
            @click="removeItem">
            Ukloni
        </h2>
    </div>
</template>