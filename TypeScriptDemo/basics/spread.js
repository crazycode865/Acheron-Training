// var arr1 = [20, 30, 40, 50];
// var var2 = [...arr1, 70, 60, 50];
// var employee = { name: "Roy", salary: 98765 };
// var address = { city: "Hyderabad", state: "Telangana" };
// var hobbies = ["sports", "Music"];
// var person = { ...employee, ...address, ...hobbies };
// var2.forEach((num) => {
//   console.log(`${num}`);
// });
// for (const key in person) {
//   console.log(`${key} ${person[key]}`);
// }
var printData = function (data) {
    if (typeof data == "string") {
        console.log("Hello ".concat(data));
    }
    else if (Array.isArray(data)) {
        data.forEach(function (num) {
            if (typeof num == "number") {
                if (num % 2 == 0)
                    console.log("".concat(num));
            }
            else if (typeof num == "string") {
                console.log("".concat(num));
            }
        });
    }
    else if (typeof data == "number") {
        console.log(data);
    }
    else if (typeof data == "object") {
        for (var key in data) {
            console.log("".concat(key, ": ").concat(data[key]));
        }
    }
};
printData("Awadhesh");
printData(10);
printData(["apple", "orange", "pineapple"]);
printData([1, 2, 3, 4, 5, 6, 7, 8, 89]);
printData({ name: "Awadhesh", city: "Banglore" });
