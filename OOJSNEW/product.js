function Product(name, price, brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;
  this.getDetails = function () {
    console.log(
      `The Product name is ${name} ,of price ${price} and the product brand is ${brand}`
    );
  };
}

Product.prototype.category = "Study";
Product.prototype.totalCost = function (quantity) {
  console.log(`The total Cost of product is ${quantity * this.price}`);
};

var product1 = new Product("Laptop", 20000, "Appple");
var product2 = new Product("Mobile", 25000, "Samsung");
product1.getDetails();
product1.totalCost(4);
console.log(product1.category);
product2.getDetails();
product2.totalCost(5);
console.log(product2.category);
