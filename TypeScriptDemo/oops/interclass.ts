// vehicle - name,brand,price
// getBrand-> return brand
// Accessories-> accName,price,type
// getAcc->;

class Vehicles {
  constructor(
    public model: string,
    public brand: string,
    public price: number
  ) {
    this.model = model;
    this.brand = brand;
    this.price = price;
  }
  getBrand = (): string => {
    return this.brand;
  };
}
class Accessories {
  constructor(
    public accName: string,
    public price: number,
    public type: string
  ) {}
  getAccessories = (): void => {
    console.log(`${this.accName} from ${this.type}`);
  };
}
interface VDetails extends Vehicles, Accessories {
  getMileage: () => void;
}
class Cars implements VDetails {
  constructor(
    public model: string,
    public brand: string,
    public price: number,
    public accName: string,
    public type: string
  ) {}
  getAccessories = () => console.log(`accessories: ${this.accName}`);
  getMileage = () => console.log(`Mileage`);
  getBrand = () => `Brand: ${this.brand}`;
}
let car: VDetails = new Cars("Civic", "Honda", 90000, "Music", "Entertainment");
car.getAccessories();
console.log(car.getBrand());
car.getMileage();

let vcar: Vehicles = new Cars("Civic", "Honda", 890, "Rear Ac", "Luxury");
console.log(vcar.getBrand());

let acar: Accessories = new Cars("Civic", "Honda", 890567, "Rear Ac", "Luxury");
acar.getAccessories();
