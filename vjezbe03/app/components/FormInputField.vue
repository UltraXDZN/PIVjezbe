<script setup lang="ts">
defineProps<{
    label: string;
    modelValue: string | number;
    placeholder?: string;
    type?: string;
    step?: string;
}>();

const emit = defineEmits(['update:modelValue']);

</script>

<template>
<div class="flex flex-col md:flex-row items-center justify-center gap-3 h-full">
    <h2 class="text-md font-bold self-center">
        {{ label }}
    </h2>
    <input  v-model="modelValue"
            class="p-2 bg-white text-[#9fa2ae] border-1 border-[#e9e9e9] rounded-lg self-center"
            :type="type || 'text'"
            :placeholder="placeholder"
            @input="$event => emit('update:modelValue', ($event.target as HTMLInputElement)?.value)" />
</div>
</template>