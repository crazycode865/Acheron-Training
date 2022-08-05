class Student {
  constructor(
    public studentName: string,
    public studentId: number,
    public city: string,
    public department?: string
  ) {}

  printDetails = () => {
    console.log(`Name: ${this.studentName}`);
    console.log(`Student Id: ${this.studentId}`);
    console.log(`City: ${this.city}`);
    console.log(`Department: ${this.department}`);
  };
  showCourses = (...courses: string[]) => {
    courses.forEach((course) => {
      console.log(`${course}`);
    });
  };
}
var student = new Student("Awadhesh", 10, "Lucknow", "CSE");
student.printDetails();
student.showCourses("Java", "Spring", "Hibernate");

class Employee {
  constructor(public name: string, public city: string) {
    this.name = name;
    this.city = city;
  }
  printDetails = () => {
    console.log(`Name: ${this.name} City: ${this.city}`);
  };
}

class Manager extends Employee {
  constructor(public name: string, public city: string, public salary: number) {
    super(name, city);
  }
  calcBonus = (amount: number) => {
    console.log(`Bonus :${this.salary + amount}`);
  };
}
var employee = new Employee("Awadhesh", "Lucknow");
employee.printDetails();
var manager: Manager = new Manager("Dibya", "Hyderabad", 10000);
manager.printDetails();
manager.calcBonus(2000);
