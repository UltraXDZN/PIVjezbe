declare global {
  type Item = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  type CartItemList = Item[];
}

export { Item, CartItemList };