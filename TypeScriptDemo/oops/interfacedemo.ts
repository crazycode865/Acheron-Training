interface Shape {
  x: number;
  y?: number;
  z?: number;
  greet(name: string): string;
  sayHello: (name: string) => string;
  calcArea: () => void;
}
class Sqaure implements Shape {
  constructor(public x: number, public y?: number, public z?: number) {}
  greet = (name: string) => `Welcome ${name}`;
  sayHello = (name: string) => `Hello ${name}`;
  calcArea = () => console.log(`Area: ${this.x * this.x}`);
  perimeter = () => {
    console.log(`Perimeter: ${2 * this.x}`);
  };
}
class Rectangle implements Shape {
  constructor(public x: number, public y?: number, public z?: number) {}
  greet = (name: string) => `Welcome to ${name}`;
  sayHello = (name: string) => `Hello ${name}`;
  calcArea = () => console.log(`Area: ${this.x * this.y}`);
  calcVolume = () => {
    console.log(`Volume: ${this.x * this.y * this.z}`);
  };
}

let shape: Shape = new Sqaure(10, 10, 20);
console.log(shape.greet("Awadhesh"));
shape.calcArea();
console.log(shape.sayHello("Awadhesh"));
let square: Sqaure = new Sqaure(10);
square.perimeter();

let shape1: Shape = new Rectangle(10, 10, 20);
console.log(shape1.greet("Rectangle"));
shape1.calcArea();
console.log(shape1.sayHello("Awadhesh"));
let rectangle: Rectangle = new Rectangle(10, 20, 40);
rectangle.calcVolume();

// let printArea = (shape: Shape) => {};

const printArea = (shape: Shape) => {
  console.log(`Calculating Area`);
  shape.calcArea();
};
shape = new Sqaure(10);
console.log(`Call Print Area`);
printArea(shape);

var sq = {
  x: 10,
  y: 20,
  z: 30,
  greet: function (name: string) {
    return `Hi ${name}`;
  },
  sayHello: function (name: string) {
    return `Hello ${name}`;
  },
  calcArea: function () {
    console.log(`Area: ${this.x * this.x}`);
  },
};
printArea(sq);
printArea({
  x: 10,
  y: 20,
  z: 30,
  greet: function (name: string) {
    return `Hi ${name}`;
  },
  sayHello: function (name: string) {
    return `Hello ${name}`;
  },
  calcArea: function () {
    console.log(`Area: ${this.x * this.x}`);
  },
});
