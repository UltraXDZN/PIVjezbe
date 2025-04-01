import { ref, computed } from 'vue'
import type { Proizvod } from '~/types'

export function useProizvodi() {
  const proizvodi = ref<Proizvod[]>([
    { naziv: "Jabuka", cijena: 0.25, kolicina: 1 },
    { naziv: "Mrkva", cijena: 0.12, kolicina: 3 },
    { naziv: "Kruh", cijena: 2.00, kolicina: 2 },
    { naziv: "Sir", cijena: 4.48, kolicina: 1 }
  ]);

  const dohvatiCijenu = (naziv: string) => {
    const proizvod = proizvodi.value.find(p => p.naziv === naziv);
    return proizvod ? proizvod.cijena : 0;
  }

  const sveukupnaCijena = computed((): number => {
    return proizvodi.value.reduce((total, proizvod) =>
      total + (proizvod.cijena * proizvod.kolicina), 0);
  });

  const najskupljaStavka = computed((): string => {
    let maxIndex = 0;
    let maxValue = 0;

    proizvodi.value.forEach((proizvod, index) => {
      const totalPrice = proizvod.cijena * proizvod.kolicina;
      if (totalPrice > maxValue) {
        maxValue = totalPrice;
        maxIndex = index;
      }
    });

    return proizvodi.value[maxIndex]!.naziv;
  });

  const isNajskuplja = (naziv: string): boolean => {
    return naziv === najskupljaStavka.value;
  };

  const increaseQuantity = (proizvod: Proizvod) => {
    proizvod.kolicina++;
  }

  return {
    proizvodi,
    dohvatiCijenu,
    sveukupnaCijena,
    najskupljaStavka,
    isNajskuplja,
    increaseQuantity
  };
}