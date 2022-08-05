// function calculate(arr) {
//   var sum = 0;
//   arr.forEach((element) => {
//     // console.log(element);
//     sum += element;
//   });
//   console.log(sum);
// }
function calculate() {
  var sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  console.log(sum);
}
calculate(90, 89);
calculate(30, 30, 80);
calculate(80, 56, 80, 70);
calculate(77, 76, 80, 70, 50);
