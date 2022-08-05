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
//using call
//function .call(for which object ,the arguments needed by greet function )

greet.call(user, "Hello");
greet.call(employee, "Have a great day");
var checkName = function () {
  var uname = this.name;
  if (uname.startsWith("J")) {
    console.log("Hello", uname);
  } else {
    console.log("Your name is invalid ", uname);
  }
};
checkName.call(user);
checkName.call(employee);
var show = function (amount, bonus, message) {
  console.log(`${message} ${this.name}`);
  console.log(`Your final amount is ${amount + bonus}`);
};
show.call(user, 9000, 1000, "Great Day");
show.call(employee, 77777, 11111, "Your Increment Details");
