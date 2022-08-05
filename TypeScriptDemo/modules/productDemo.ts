export interface ProductDetails {
  itemName: string;
  price: number;
  cartDetails: (quantity: number) => number;
}
export class Gadgets implements ProductDetails {
  constructor(public itemName: string, public price: number) {}
  cartDetails  (quantity: number) =>number{
    console.log(`Cart Details`);
    console.log(`Item name: ${this.itemName}`);
    console.log(`Total cost : ${this.quantity * this.price}`);
  };
}

let appliances = {
  itemName: 'Mobile',
  price:67890 ,
  cartDetails = (quantity: number) => {
    console.log(`Cart Details`);
    console.log(`Item name: ${this.itemName}`);
    console.log(`Total cost : ${quantity * this.price}`);
  },
};
const showBill = (p: ProductDetails, quantity: number) => {
  p.cartDetails(quantity);
};
let gadget:Gadgets = new Gadgets('Mobile',5000);



