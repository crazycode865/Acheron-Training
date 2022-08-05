class Vehicle {
  constructor(public name: string, public brand: string, public price: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }
  print = () => {
    console.log(`${this.name} Details: `);
    console.log(`Name :${this.name}`);
    console.log(`Brand :${this.brand}`);
    console.log(`Price :${this.price}`);
  };
}
class Bike extends Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public mileage: number
  ) {
    super(name, brand, price);
  }
  showMileage = (engineCC: string) => {
    if (engineCC == "100CC") console.log(`Meleage: ${this.mileage / 2}🚲`);
    if (engineCC == "300CC") console.log(`Meleage: ${this.mileage / 4}🚲`);
    if (engineCC == "500CC") console.log(`Meleage: ${this.mileage / 6}🚲`);
  };
}
class Car extends Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public fuelType: string
  ) {
    super(name, brand, price);
    this.fuelType = fuelType;
  }
  showAccessories = (...accessories: string[]) => {
    console.log(`Fuel Type: ${this.fuelType}`);
    console.log(`Car Accessories: `);
    var count: number;
    count = 1;
    accessories.forEach((item) => {
      console.log(`${count++}. ${item}🛠`);
    });
  };
}
var vehile1: Bike = new Bike("Bike", "Royal Enfield", 123456, 100);
vehile1.print();
vehile1.showMileage("100CC");
var vehile2: Car = new Car("i20", "Hyundai", 98765, "Petrol");
vehile2.print();
vehile2.showAccessories(
  "Music System",
  "Seat Cover",
  "GPS navigator",
  "Air Freshner",
  "Charging socket",
  "Cleaning Cloths",
  "Puncture repair Kit"
);
