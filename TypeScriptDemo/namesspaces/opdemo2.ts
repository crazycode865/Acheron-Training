///<reference path="./opdemo1.ts"/>

namespace Operation2 {
  export class Adder implements Operation1.Calculator {
    calculate = (x: number, y: number) => {
      console.log(x + y);
    };
  }
  export class Difference implements Operation1.Calculator {
    calculate = (x: any, y: any) => {
      console.log(x - y);
    };
  }
}
