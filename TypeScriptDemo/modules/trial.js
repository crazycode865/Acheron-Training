"use strict";
exports.__esModule = true;
exports.greet = void 0;
var message = "Great Day";
var greet = function () {
    console.log("".concat(message));
};
exports.greet = greet;
(0, exports.greet)();
var checker = function () {
    console.log("Dont export");
    console.log("This is like a private functions");
};
var Product = /** @class */ (function () {
    function Product(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.getInfo = function () {
            console.log("".concat(_this.itemName, " ").concat(_this.price));
        };
    }
    return Product;
}());
