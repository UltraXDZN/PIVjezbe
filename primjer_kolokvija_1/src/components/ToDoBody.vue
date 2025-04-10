<script setup>
import { onMounted, ref, watch, TransitionGroup, Transition} from 'vue';
import { useBrojacStavki } from '@/composables/brojacStavki';
import ToDoStavka from './ToDoStavka.vue';

const stavke = ref([
    {
        opis: 'Implementirati uklanjanje',
        zavrseno: false,
        prioritet: 1,
    },
    {
        opis: 'Dodati text edit',
        zavrseno: true,
        prioritet: 2,
    },
    {
        opis: 'Implementirati pomicanje',
        zavrseno: false,
        prioritet: 4,
    },
    {
        opis: 'Dodati date',
        zavrseno: false,
        prioritet: 5,
    },
    {
        opis: 'Implementirati promjenu boje',
        zavrseno: false,
        prioritet: 0,
    }
]);

const dodajPraznuStavku = () => stavke.value.push(
    {
        opis: 'Napiši opis...',
        zavrseno: false,
        prioritet: 0
    }
);

const { postavi } = useBrojacStavki();

onMounted(() => {
    postavi(stavke.value.length);
    watch(stavke, () => {
        postavi(stavke.value.length);
    }, {deep: true});
});
</script>

<template>
    <div class="flex h-screen justify-center items-center">
        <div class="mx-auto w-auto">
            <TransitionGroup
                name="list"
                tag="div"
                :css="true"
                mode="out-in"
            >
            <ToDoStavka v-for="(stavka, index) in stavke.sort((a, b) => b.prioritet - a.prioritet)" :key="stavka.prioritet"
                :opis="stavka.opis"
                :zavrseno="stavka.zavrseno"
                :prioritet="stavka.prioritet"
                @azurirajZavrseno="(zavrseno) => stavka.zavrseno = zavrseno"
                @azurirajOpis="(opis) => stavka.opis = opis"
            >
                <button @click="stavka.prioritet++" class="flex items-center justify-center cursor-pointer
                        rounded bg-sky-600/50 min-w-4 h-4 hover:bg-sky-500/75">
                        <span class="mb-0.5 text-sky-100"> + </span>
                </button>
                <button @click="stavka.prioritet--" class="flex items-center justify-center cursor-pointer
                        rounded bg-sky-600/50 min-w-4 h-4 hover:bg-sky-500/75">
                        <span class="mb-0.5 text-sky-100"> - </span>
                </button>
                <button @click="stavke.splice(index, 1)" class="flex items-center justify-center cursor-pointer
                        rounded bg-rose-700/25 min-w-4 h-4 hover:bg-rose-600/50">
                        <span class="mb-0.5 text-rose-300"> x </span>
                </button>
            </ToDoStavka>
        </TransitionGroup>
        <button
            @click="dodajPraznuStavku"
            class="bg-gray-400 p-4 text-center text-xl gap-3 rounded-lg my-3 text-white font-bold w-full">
            Dodaj novu stavku
        </button>
        </div>
    </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>