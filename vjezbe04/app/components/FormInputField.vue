<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string | number;
  placeholder?: string;
  type?: string;
  step?: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    class="flex h-full flex-col items-center justify-center gap-3 md:flex-row"
  >
    <h2 class="text-md self-center font-bold">
      {{ label }}
    </h2>
    <input
      :value="modelValue"
      class="border-1 self-center rounded-lg border-[#e9e9e9] bg-white p-2 text-[#9fa2ae]"
      :type="type || 'text'"
      :placeholder="placeholder"
      @input="
        emit(
          'update:modelValue',
          type === 'number'
            ? parseFloat(($event.target as HTMLInputElement)?.value)
            : ($event.target as HTMLInputElement)?.value
        )
      "
    />
  </div>
</template>
