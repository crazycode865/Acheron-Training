///<reference path= './opdemo1.ts' />

namespace Operation1 {
  export class Multiplier implements Operation1.Calculator {
    calculate = (x: number, y: number) => {
      console.log(x * y);
    };

    square = (x: number) => {
      console.log(Math.pow(x, 2));
    };
  }
}
