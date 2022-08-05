// var employee = {
//   employeeId: "1",
//   name: "Awadhesh",

//   hobbies: ["sports", "music"],
//   address: {
//     city: "Hyderabad",
//     state: "Telangana",
//   },
//   mobile: 98765432,
// };
// console.log(employee);
// console.log(employee.name);
// console.log(employee.address);

// for (const key in employee) {
//   console.log(key + " " + employee[key]);
// }

// for (const key in employee) {
//   var value = employee[key];
//   if (Array.isArray(value)) {
//     for (const val in value) {
//       console.log(key + " " + value[val]);
//     }
//   } else if (typeof value == "object") {
//     for (const val in value) {
//       console.log(key + " " + value[val]);
//     }
//   } else console.log(key, employee[key]);
// }
// var arr = ["Awadhesh", "Dibya", "Sandeep"];
// console.log(arr);

const array = [
  {
    name: "Madhu",
    department: {
      deptName: "CSE",
      deptHead: "Dibya",
    },
    skills: ["Hibernate", "Java"],
    city: "Kolkata",
  },
  {
    name: "Dibya",
    department: {
      deptName: "CSE",
      deptHead: "Abu",
    },
    skills: ["Python", "Java"],
    city: "Rourkela",
  },
  {
    name: "Sandep",
    department: {
      deptName: "EEE",
      deptHead: "Madhu",
    },
    skills: ["Spring Boot", "Microservices"],
    city: "Hyderabad",
  },
  {
    name: "Awadhesh",
    department: {
      deptName: "CSE",
      deptHead: "Baba",
      skills: ["Java", "Docker"],
    },
    skills: ["Java", "Docker"],
    city: "Lucknow",
  },
];

// for (const key in array) {
//   var value = array[key];
//   if (Array.isArray(value)) {
//     for (const val in value) {
//       console.log(key + " " + value[val]);
//     }
//   } else if (typeof value == "object") {
//     for (const val in value) {
//       console.log(key + " " + value[val]);
//     }
//   } else console.log(key, array[key]);
// }

// for (const index in array) {
//   var employee = array[index];
//   for (const key in employee) {
//     var prop = employee[key];
//     if (Array.isArray(prop)) for (const val of prop) console.log(key, val);
//     else if (typeof prop == "object")
//       for (const i in prop) console.log(i, prop[i]);
//     else console.log(key, prop);
//   }
// }
array.forEach((array) => {
  var employee = array;
  for (const key in employee) {
    var prop = employee[key];
    if (Array.isArray(prop)) for (const val of prop) console.log(key, val);
    else if (typeof prop == "object")
      for (const i in prop) console.log(i, prop[i]);
    else console.log(key, prop);
  }
});
