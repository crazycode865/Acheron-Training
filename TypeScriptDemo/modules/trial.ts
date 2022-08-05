export let message = "Great Day";
export let greet = (): void => {
  console.log(`${message}`);
};
greet();

let checker = (): void => {
  console.log(`Dont export`);
  console.log(`This is like a private functions`);
};
export class Product {
  constructor(public itemName: string, public price: number) {}
  getInfo = () => {
    console.log(`${this.itemName} ${this.price}`);
  };
}
