//create an array of mobile objects

var mobiles = [
  { model: "A123", brand: "Samsung", price: 2345 },
  { model: "7x", brand: "Honor", price: 98765 },
  { model: "C2", brand: "RealMe", price: 23445 },
];
var laptops = [
  { model: "A123", brand: "Dell", price: 2345 },
  { model: "7x", brand: "Lenovo", price: 98765 },
  { model: "C2", brand: "Apple", price: 23445 },
];

// mobiles.forEach((mobile) => {
//   //   var value = mobile;
//   for (const key in mobile) {
//     var prop = mobile[key];
//     console.log(key, prop);
//   }
// });

function details() {
  console.log(`Model ${this.model}`);
  console.log(`Brand ${this.brand}`);
  console.log(`Price ${this.price}`);
}

mobiles.forEach((mobile) => {
  details.call(mobile, 1000);
});
laptops.forEach((laptop) => {
  details.apply(laptop, [2000]);
});
