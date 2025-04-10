<script setup>
import { computed, ref, useTemplateRef } from 'vue';

const props = defineProps(['opis', 'zavrseno', 'prioritet']);
const emit = defineEmits(['azurirajOpis', 'azurirajZavrseno'])

let unos = useTemplateRef("unosRef");
let uredivanje = ref(false);
let noviOpis = ref(props.opis);

const dopustenoUredivanje = computed(() => uredivanje.value && !props.zavrseno);
const ukljuciUredivanje = () => {
    if (props.zavrseno) return;
    unos.value.focus();
    noviOpis.value = props.opis;
    uredivanje.value = true;
}

const iskljuciUredivanje = () => {
    uredivanje.value = false;
    emit('azurirajOpis', noviOpis.value);
}

</script>

<template>
    <div class="bg-gray-800 p-4 flex flex-row gap-3 rounded-lg my-3">
        <p class="text-white">
            {{ prioritet }}.
        </p>
        <div @click="$emit('azurirajZavrseno', !zavrseno)">
            <div v-if="zavrseno"
                class="bg-green-600 w-6 h-6 rounded-md cursor-pointer"></div>
            <div v-else 
                class="bg-gray-600 border-1 border-gray-300 w-6 h-6 rounded-md cursor-pointer"></div>
        </div>
        <div v-if="!dopustenoUredivanje" @dblclick="ukljuciUredivanje" class="grow">
            <p v-if="zavrseno"
                class="text-white line-through"
                >
                {{ opis }}
            </p>
            <p v-else
                class="text-white">
                {{ opis }}
            </p>
        </div>
        <input
            v-model="noviOpis"
            type="text"
            ref="unosRef"
            class="text-white grow"
            :class="!dopustenoUredivanje ? 'max-w-0' : ''"
            @focusout="iskljuciUredivanje">
        <slot/>
    </div>
</template>