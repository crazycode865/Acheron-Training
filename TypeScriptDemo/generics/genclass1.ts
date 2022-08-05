class GenEmployee<T> {
  constructor(public empname: T) {}
  setName(empname: T) {
    this.empname = empname;
  }
  print = () => {
    console.log(this.empname);
  };
}
let emp: GenEmployee<string> = new GenEmployee<string>("Awadhesh");
emp.setName("Priya");
emp.print();

let empnum: GenEmployee<number> = new GenEmployee<number>(100);
empnum.setName(200);
empnum.print();

let empArr: GenEmployee<string[]> = new GenEmployee<string[]>([
  "Python",
  "Java",
]);
empArr.setName(["Python", "Java", "Spring"]);
empArr.print();

let empNumArr: GenEmployee<number[]> = new GenEmployee<number[]>([
  10, 20, 30, 40, 50,
]);
empNumArr.setName([60.7, 80]);
empNumArr.print();
