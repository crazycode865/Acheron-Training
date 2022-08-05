// var greet = function () {
//   return {
//     name: "Awadhesh",
//     city: "Luck",
//     details: () => {
//       console.log("Great day");
//     },
//   };
// };
// var obj = greet();
// console.log(obj);
// console.log(obj.name);

// var interestCalc = function () {
//   let msg = "Interest Calculation";
//   let principal = 50000,
//     rate = 10,
//     year = 4;
//   let interest = 0;
//   return {
//     message: msg,
//     setInterest: () => {
//       interest = (principal * rate * year) / 100;
//     },
//     getInterest: () => {
//       return interest;
//     },
//   };
// };
// var insObj = interestCalc();
// console.log(insObj.message);
// insObj.setInterest();
// console.log(insObj.getInterest());

//Creating Module

// var interestModule = (function () {
//   let _msg = "Interest Calculation";
//   let _principal = 50000,
//     _rate = 10,
//     _year = 4;
//   let interest = 0;
//   return {
//     message: _msg,
//     setInterest: () => {
//       interest = (_principal * _rate * _year) / 100;
//     },
//     getInterest: () => {
//       return interest;
//     },
//   };
// })();
// console.log(interestModule.message);
// interestModule.setInterest();
// console.log(interestModule.getInterest());

//Reveling module design patter
var insModule = (function () {
  let _msg = "Interest Calculation";
  let _principal = 50000;
  let _rate = 10;
  let _year = 4;
  let interest = 0;

  let _setInterest = () => {
    interest = (_principal * _rate * _year) / 100;
  };
  let _getInterest = () => {
    _setInterest();
    return interest;
  };
  let _check = () => {
    return "Checking";
  };
  return {
    message: _msg,
    interest: _getInterest(),
    newCheck: _check,
    show: () => {
      console.log(`Showing`);
    },
  };
})();
console.log(insModule.message);
console.log(insModule.interest);
var res = insModule.newCheck();
console.log(res);
insModule.show();
