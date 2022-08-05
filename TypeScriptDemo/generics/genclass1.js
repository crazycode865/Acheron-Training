var GenEmployee = /** @class */ (function () {
    function GenEmployee(empname) {
        var _this = this;
        this.empname = empname;
        this.print = function () {
            console.log(_this.empname);
        };
    }
    GenEmployee.prototype.setName = function (empname) {
        this.empname = empname;
    };
    return GenEmployee;
}());
var emp = new GenEmployee("Awadhesh");
emp.setName("Priya");
emp.print();
var empnum = new GenEmployee(100);
empnum.setName(200);
empnum.print();
var empArr = new GenEmployee([
    "Python",
    "Java",
]);
empArr.setName(["Python", "Java", "Spring"]);
empArr.print();
var empNumArr = new GenEmployee([
    10, 20, 30, 40, 50,
]);
empNumArr.setName([60.7, 80]);
empNumArr.print();
