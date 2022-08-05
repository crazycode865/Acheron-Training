let addItems = (item: string[]): any => {
  return new Array(item);
};
let fruit = ["apple", "mango", "orange", "banana", "chickoo"];
let fruits = addItems(fruit);

fruits.push("grapes");
fruits(100);
fruits.forEach((fruit) => {
  console.log(fruit);
});

// function printItems<T>(item:<T>[]):<T>[]{
// return new Array<T>().concat(item);
// }
function printItems<T>(item: T[]): T[] {
  return new Array<T>().concat(item);
}
let courses = ["Java", "Spring", "Python"];
let courseArr = printItems(courses);
courseArr.push("Angular");
// courseArr.push(100); Error

let narr = [10, 20, 30, 40];
let numArray = printItems(narr);
numArray.push(100);
// numArray.push("awa") // Error Because  array is number type
numArray.forEach((num) => console.log(num));
