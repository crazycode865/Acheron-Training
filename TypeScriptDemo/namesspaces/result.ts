///<reference path="./opdemo1.ts"/>
///<reference path="./opdemo2.ts"/>
///<reference path="./opdemo3.ts"/>

const performOpt = (
  calc: Operation1.Calculator,
  num1: number,
  num2: number
) => {
  calc.calculate(num1, num2);
};
let add: Operation1.Calculator = new Operation2.Adder();
add.calculate(70, 30);
let diff: Operation1.Calculator = new Operation2.Difference();
diff.calculate(50, 20);
let multi: Operation1.Calculator = new Operation1.Multiplier();
multi.calculate(10, 30);
let squar: Operation1.Multiplier = new Operation1.Multiplier();
squar.square(10);
