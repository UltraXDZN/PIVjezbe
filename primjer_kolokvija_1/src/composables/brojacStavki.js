import { ref } from 'vue';

const brojac = ref(0);

export function useBrojacStavki() {
    function postavi(vrijednost) {
        brojac.value = vrijednost;
    }

    return {
        brojac,
        postavi
    }
}
