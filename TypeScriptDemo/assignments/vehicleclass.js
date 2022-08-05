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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, brand, price) {
        var _this = this;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.print = function () {
            console.log("".concat(_this.name, " Details: "));
            console.log("Name :".concat(_this.name));
            console.log("Brand :".concat(_this.brand));
            console.log("Price :".concat(_this.price));
        };
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(name, brand, price, mileage) {
        var _this = _super.call(this, name, brand, price) || this;
        _this.name = name;
        _this.brand = brand;
        _this.price = price;
        _this.mileage = mileage;
        _this.showMileage = function (engineCC) {
            if (engineCC == "100CC")
                console.log("Meleage: ".concat(_this.mileage / 2));
            if (engineCC == "300CC")
                console.log("Meleage: ".concat(_this.mileage / 4));
            if (engineCC == "500CC")
                console.log("Meleage: ".concat(_this.mileage / 6));
        };
        return _this;
    }
    return Bike;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, brand, price, fuelType) {
        var _this = _super.call(this, name, brand, price) || this;
        _this.name = name;
        _this.brand = brand;
        _this.price = price;
        _this.fuelType = fuelType;
        _this.showAccessories = function () {
            var accessories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                accessories[_i] = arguments[_i];
            }
            console.log("Fuel Type: ".concat(_this.fuelType));
            console.log("Car Accessories: ");
            var count;
            count = 1;
            accessories.forEach(function (item) {
                console.log("".concat(count++, ". ").concat(item));
            });
        };
        _this.fuelType = fuelType;
        return _this;
    }
    return Car;
}(Vehicle));
var vehile1 = new Bike("Bike", "Royal Enfield", 123456, 100);
vehile1.print();
vehile1.showMileage("100CC");
var vehile2 = new Car("i20", "Hyundai", 98765, "Petrol");
vehile2.print();
vehile2.showAccessories("Music System", "Seat Cover", "GPS navigator", "Air Freshner", "Charging socket", "Cleaning Cloths", "Puncture repair Kit");
