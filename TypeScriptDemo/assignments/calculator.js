var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
        this.sum = function (num1, num2) {
            console.log("Sum: " + (num1 + num2));
        };
        this.diff = function (num1, num2) {
            console.log("Difference: " + (num1 - num2));
        };
        this.product = function (num1, num2) {
            console.log("Product:" + num1 * num2);
        };
        this.division = function (num1, num2) {
            console.log("Division:" + num1 / num2);
        };
    }
    return BasicCalculator;
}());
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.square = function (num1) {
            console.log("Square:" + Math.pow(num1, 2));
        };
        _this.cube = function (num1) {
            console.log("Cube:" + Math.pow(num1, 3));
        };
        return _this;
    }
    return ScientificCalculator;
}(BasicCalculator));
var scientific = new ScientificCalculator();
scientific.sum(10, 20);
scientific.diff(50, 40);
scientific.product(30, 40);
scientific.division(25, 50);
scientific.square(7);
scientific.cube(4);
