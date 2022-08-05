interface Calculator {
  sum: (num1: number, num2: number) => void;
  diff: (num1: number, num2: number) => void;
  product: (num1: number, num2: number) => void;
  division: (num1: number, num2: number) => void;
}
class BasicCalculator implements Calculator {
  sum = (num1: number, num2: number) => {
    console.log("Sum: " + (num1 + num2));
  };
  diff = (num1: number, num2: number) => {
    console.log("Difference: " + (num1 - num2));
  };
  product = (num1: number, num2: number) => {
    console.log("Product:" + num1 * num2);
  };
  division = (num1: number, num2: number) => {
    console.log("Division:" + num1 / num2);
  };
  c;
}
interface Scientific extends Calculator {
  square: (num1: number) => void;
  cube: (num1: number) => void;
}
class ScientificCalculator extends BasicCalculator implements Scientific {
  square = (num1: number) => {
    console.log("Square:" + num1 ** 2);
  };
  cube = (num1: number) => {
    console.log("Cube:" + num1 ** 3);
  };
}
let scientific: Scientific = new ScientificCalculator();
scientific.sum(10, 20);
scientific.diff(50, 40);
scientific.product(30, 40);
scientific.division(25, 50);
scientific.square(7);
scientific.cube(4);
