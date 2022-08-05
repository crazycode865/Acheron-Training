// class Student {
//   constructor(
//    public studentName: string,
//     public studentId: number,
//     public city: string,
//     public department?: string
//   ) {}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   printDetails = () => {
//     console.log(`Name: ${this.studentName}`);
//     console.log(`Student Id: ${this.studentId}`);
//     console.log(`City: ${this.city}`);
//     console.log(`Department: ${this.department}`);
//   };
//   showCourses = (...courses: string[]) => {
//     courses.forEach((course) => {
//       console.log(`${course}`);
//     });
//   };
// }
// var student = new Student("Awadhesh", 10, "Lucknow", "CSE");
// student.printDetails();
// student.showCourses("Java", "Spring", "Hibernate");
var Employee = /** @class */ (function () {
    function Employee(name, city) {
        var _this = this;
        this.name = name;
        this.city = city;
        this.printDetails = function () {
            console.log("Name: ".concat(_this.name, " City: ").concat(_this.city));
        };
        this.name = name;
        this.city = city;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, city, salary) {
        var _this = _super.call(this, name, city) || this;
        _this.name = name;
        _this.city = city;
        _this.salary = salary;
        _this.calcBonus = function (amount) {
            console.log("Bonus :".concat(_this.salary + amount));
        };
        return _this;
    }
    return Manager;
}(Employee));
var employee = new Employee("Awadhesh", "Lucknow");
employee.printDetails();
var manager = new Manager("Dibya", "Hyderabad", 10000);
manager.printDetails();
manager.calcBonus(2000);
