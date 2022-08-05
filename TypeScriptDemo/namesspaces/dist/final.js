"use strict";
///<reference path="./opdemo1.ts"/>
var Operation2;
///<reference path="./opdemo1.ts"/>
(function (Operation2) {
    class Adder {
        constructor() {
            this.calculate = (x, y) => {
                console.log(x + y);
            };
        }
    }
    Operation2.Adder = Adder;
    class Difference {
        constructor() {
            this.calculate = (x, y) => {
                console.log(x - y);
            };
        }
    }
    Operation2.Difference = Difference;
})(Operation2 || (Operation2 = {}));
///<reference path= './opdemo1.ts' />
var Operation1;
///<reference path= './opdemo1.ts' />
(function (Operation1) {
    class Multiplier {
        constructor() {
            this.calculate = (x, y) => {
                console.log(x * y);
            };
            this.square = (x) => {
                console.log(Math.pow(x, 2));
            };
        }
    }
    Operation1.Multiplier = Multiplier;
})(Operation1 || (Operation1 = {}));
///<reference path="./opdemo1.ts"/>
///<reference path="./opdemo2.ts"/>
///<reference path="./opdemo3.ts"/>
const performOpt = (calc, num1, num2) => {
    calc.calculate(num1, num2);
};
let add = new Operation2.Adder();
add.calculate(70, 30);
let diff = new Operation2.Difference();
diff.calculate(50, 20);
let multi = new Operation1.Multiplier();
multi.calculate(10, 30);
let squar = new Operation1.Multiplier();
squar.square(10);
