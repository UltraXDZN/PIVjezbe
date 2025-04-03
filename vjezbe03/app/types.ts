export interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
    remove(): void;
    increment(): void;
    decrement(): void;
}