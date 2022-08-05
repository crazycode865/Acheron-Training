function Employee(name, city) {
  this.name = name;
  this.city = city;
  this.getDetails = () => {
    console.log(`Employee Details`);
    console.log(`Name: ${name} City: ${city}`);
  };
}

function Manager(name, city, salary) {
  Employee.apply(this, [name, city]);
  this.name = name;
  this.city = city;
  this.calcSalary = (bonus) => {
    console.log(`Manager Salary`);
    console.log(`Bonus: ${salary + bonus}`);
  };
}
var employee = new Employee("Awadhesh", "Hyderabad");
employee.getDetails();
var manager = new Manager("Dibya", "Banglore", 2000);
manager.calcSalary(5000);
manager.getDetails();
Employee.prototype.greet = () => {
  console.log(`Great day`);
};
employee.greet();
Manager.prototype = Object.create(Employee.prototype);
manager.greet();
