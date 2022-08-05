var cartModule = (function () {
  var cart = [];
  let _addToCart = function (item) {
    cart.push(item);
  };
  let _getCount = function () {
    return cart.length;
  };
  let _calcTotal = function () {
    var total = 0;
    for (var item in cart) {
      total += cart[item].price;
    }
    return total;
  };
  let _showItems = function () {
    for (var item in cart) {
      console.log(`${cart[item].name} ${cart[item].price}`);
    }
  };
  let _printBill = function () {
    console.log(`Your Bill `);
    console.log("Count: " + _getCount());
    console.log("Total price: " + _calcTotal());
    _showItems();
  };
  return {
    message: "Your cart Details",
    addTocart: _addToCart,
    getDetails: _printBill,
  };
})();
cartModule.addTocart({ name: "Mobile", price: 23456 });
cartModule.addTocart({ name: "Laptop", price: 90888 });
cartModule.getDetails();
