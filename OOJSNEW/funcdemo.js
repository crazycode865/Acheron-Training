// function sum(num1, num2) {
//   return num1 + num2;
// }
// // console.log("Sum: ", sum(10, 20));
// // total(10, 20);
// var total = function (x, y) {
//   console.log(x + y);
// };
// total(10, 20);

// var greet = function () {
//   console.log("Have a great day");
// };
// var show = function (func) {
//   func();
// };
// show(greet);

// var sayHello = function (uname) {
//   console.log(`Hello ${uname}`);
// };
// var printMessage = function (say, uname) {
//   say(uname);
// };
// printMessage(sayHello, "Awadhesh");

var calculate = function (x, y, z) {
  return x + y + z;
};
var printAverage = function (sum, x, y, z) {
  let avg = sum(x, y, z);
  console.log(avg / 3);
};
printAverage(calculate, 10, 20, 30);

var show = (uname) => {
  console.log(`Have a great day ${uname}`);
};
show("Awadhesh");
