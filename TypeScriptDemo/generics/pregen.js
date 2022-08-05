var addItems = function (item) {
    return new Array(item);
};
var fruit = ["apple", "mango", "orange", "banana", "chickoo"];
var fruits = addItems(fruit);
fruits.push("grapes");
fruits(100);
fruits.forEach(function (fruit) {
    console.log(fruit);
});
// function printItems<T>(item:<T>[]):<T>[]{
// return new Array<T>().concat(item);
// }
function printItems(item) {
    return new Array().concat(item);
}
var courses = ["Java", "Spring", "Python"];
var courseArr = printItems(courses);
courseArr.push("Angular");
// courseArr.push(100); Error
var narr = [10, 20, 30, 40];
var numArray = printItems(narr);
numArray.push(100);
// numArray.push("awa") // Error Because  array is number type
numArray.forEach(function (num) { return console.log(num); });
