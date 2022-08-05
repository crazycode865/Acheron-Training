// function Student(){

// }
//  var Student={

//  }

function Student(name, city) {
  this.name = name;
  this.city = city;
  this.greet = function () {
    console.log(`Welcome to ${this.name} from ${this.city}`);
  };
}
// var student = new Student("Awadhesh", "Lucknow");
// console.log(student.name);
// console.log(student.city);
// student.greet();

// var student1 = new Student("Sandeep", "Hyderbad");
// console.log(student1.name);
// console.log(student1.city);
// student1.greet();

//Prototype
Student.prototype.age = 25;
Student.prototype.mobile = 098765432;
Student.prototype.check = function (message) {
  console.log(message, `${this.name}`);
};
var student1 = new Student("Sandeep", "Hyderbad");
console.log(student1.name);
console.log(student1.city);
student1.greet();
student1.check("My message");

//Product

// function Product(name,price,brand){
//     this.name = name;
//     this.
// }
