<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
}>();
</script>

<template>
  <div class="text-md flex flex-row gap-2">
    <span class="font-bold">
        {{ label }} :
    </span>
    <span>
        {{ value }}
    </span>
  </div>
</template>