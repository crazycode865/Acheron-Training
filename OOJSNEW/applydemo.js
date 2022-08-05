var User = function (name, city) {
  this.name = name;
  this.city = city;
};
var Employee = function (name, department) {
  this.name = name;
  this.department = department;
};
var greet = function (message) {
  console.log(`Message ${message} ${this.name}`);
};
var user = new User("Jack", "Pune");
var employee = new Employee("Helen", "Backend");

greet.apply(user, ["Hello"]);
greet.apply(employee, ["Have a great day"]);

var checkName = function () {
  var uname = this.name;
  if (uname.startsWith("J")) {
    console.log("Hello", uname);
  } else {
    console.log("Your name is invalid ", uname);
  }
};
checkName.apply(user);
checkName.apply(employee);
var show = function (amount, bonus, message) {
  console.log(`${message} ${this.name}`);
  console.log(`Your final amount is ${amount + bonus}`);
};
show.apply(user, [9000, 1000, "Great Day"]);
show.apply(employee, [77777, 11111, "Your Increment Details"]);
