// function calcAvg(x, y, z) {
//   return (x + y + z) / 3;
// }

// var average = function (m1, m2, m3) {
//   function sum() {
//     return m1 + m2 + m3;
//   }
//   var total = sum() / 3;
//   console.log(total);
// };
// average(10, 20, 30);

//IIFE-Immediately Invoked function Expression
// (function greeter() {
//   console.log("Have a great");
// })();

// var average = function (m1, m2, m3) {
//   var total =
//     (function sum() {
//       return m1 + m2 + m3;
//     })() / 3;
//   var total = console.log(total);
// };
// average(10, 20, 30);
// var average = function (m1, m2, m3) {
//   var total =
//     (function () {
//       return m1 + m2 + m3;
//     })() / 3;
//   var total = console.log(total);
// };
// average(10, 20, 30);

// var average2 = function (m1, m2, m3) {
//   var total =
//     (function () {
//       return m1 + m2 + m3;
//     })() / 3;
//   return total;
// };
// var avg2 = average2(90, 90, 90);
// console.log(avg2);

// var average2 = function (m1, m2, m3) {
//   return function () {
//     return m1 + m2 + m3;
//   };
// };
// var avg2 = average2(90, 90, 90)();
// console.log(avg2 / 3);

// var showDetails = function (fname, lname) {
//   var message = "Have a great day";
//   return function () {
//     console.log(`${message} ${fname.toUpperCase()} ${lname.toUpperCase()}`);
//   };
// };
// showDetails("SriPriya", "Mathan")();

var empDetails = function (fname, city, salary) {
  var message = "Employee Details";
  return (function (amount) {
    console.log(`${message}`);
    console.log(`Name: ${fname}`);
    console.log(`City: ${city}`);
    console.log(`Salary: ${salary}`);
    console.log(`Bonus: ${salary + amount}`);
  })(2000);
};
var details = empDetails("Greogy", "Banglore", 28000);
