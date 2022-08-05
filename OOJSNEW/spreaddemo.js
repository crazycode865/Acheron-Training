// function print() {}
// print([]);
// var gnames = ["Madhu", "Abu"];
// var bnames = ["Akash", "Sandeep"];

//using spread operator
//spread is used tospread the array into ondividual values
//use... before the array/object name
// var names = [...gnames, ...bnames];
// names.forEach((value) => console.log(value));
// findVowels("j", "a", "u", "v", "a", "s", "c", "r", "i", "p", "t");
// function findVowels(...words) {
//   var count = 0;
//   words.forEach((letter) => {
//     if (
//       letter == "a" ||
//       letter == "e" ||
//       letter == "i" ||
//       letter == "o" ||
//       letter == "u"
//     )
//       count++;
//   });
//   console.log(count);
// }
var employee = {
  name: "Awadhesh",
  salary: 23456,
};
var address = {
  city: "Hyderabad",
  state: "Telangana",
};

var person = { ...employee, ...address };
console.log(person);
