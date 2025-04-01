export type ProizvodNaziv = "Jabuka" | "Mrkva" | "Sir" | "Kruh";

export interface Proizvod {
    naziv: ProizvodNaziv;
    cijena: number;
    kolicina: number;
}

export type SlikeMap = Record<ProizvodNaziv, string>;

export interface Korisnik {
    ime: string;
    adresa: string;
    telefon: string;
    admin: boolean;
}