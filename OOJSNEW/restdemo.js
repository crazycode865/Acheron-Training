// //using rest
// //syntax is .... followed by the variable name

// function calculate(...nums) {
//   console.log("length", arguments.length);
//   var sum = 0;
//   nums.forEach((value) => (sum += value));
//   console.log("sum: "+sum);
// }
// calculate(90, 89);
// calculate(30, 30, 80);
// calculate(80, 56, 80, 70);
// calculate(77, 76, 80, 70, 50);
function checkName(...names) {
  names.forEach((value) => {
    if (value.startsWith("P")) console.log(value);
  });
}
checkName("Priya", "Paul", "raju", "Sri");
checkName("Priya", "Paul", "raju");
checkName("Priya", "Paul", "raju", "Sri", "Awadhesh");
