<script setup>
import { useBrojacStavki } from '@/composables/brojacStavki';

const { brojac } = useBrojacStavki();
</script>

<template>
    <header class="fixed top-0 left-0 right-0 bg-gray-400 p-4 text-center">
        <h1 class="text-2xl font-bold">
            <slot>
            </slot>
            | {{ brojac }}
        </h1>
    </header>
</template>