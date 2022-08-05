var Sqaure = /** @class */ (function () {
    function Sqaure(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.greet = function (name) { return "Welcome ".concat(name); };
        this.sayHello = function (name) { return "Hello ".concat(name); };
        this.calcArea = function () { return console.log("Area: ".concat(_this.x * _this.x)); };
        this.perimeter = function () {
            console.log("Perimeter: ".concat(2 * _this.x));
        };
    }
    return Sqaure;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.greet = function (name) { return "Welcome to ".concat(name); };
        this.sayHello = function (name) { return "Hello ".concat(name); };
        this.calcArea = function () { return console.log("Area: ".concat(_this.x * _this.y)); };
        this.calcVolume = function () {
            console.log("Volume: ".concat(_this.x * _this.y * _this.z));
        };
    }
    return Rectangle;
}());
var shape = new Sqaure(10, 10, 20);
console.log(shape.greet("Awadhesh"));
shape.calcArea();
console.log(shape.sayHello("Awadhesh"));
var square = new Sqaure(10);
square.perimeter();
var shape1 = new Rectangle(10, 10, 20);
console.log(shape1.greet("Rectangle"));
shape1.calcArea();
console.log(shape1.sayHello("Awadhesh"));
var rectangle = new Rectangle(10, 20, 40);
rectangle.calcVolume();
// let printArea = (shape: Shape) => {};
var printArea = function (shape) {
    console.log("Calculating Area");
    shape.calcArea();
};
shape = new Sqaure(10);
console.log("Call Print Area");
printArea(shape);
var sq = {
    x: 10,
    y: 20,
    z: 30,
    greet: function (name) {
        return "Hi ".concat(name);
    },
    sayHello: function (name) {
        return "Hello ".concat(name);
    },
    calcArea: function () {
        console.log("Area: ".concat(this.x * this.x));
    }
};
printArea(sq);
printArea({
    x: 10,
    y: 20,
    z: 30,
    greet: function (name) {
        return "Hi ".concat(name);
    },
    sayHello: function (name) {
        return "Hello ".concat(name);
    },
    calcArea: function () {
        console.log("Area: ".concat(this.x * this.x));
    }
});
