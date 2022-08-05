var names = ["Awadhesh", "Abuthair", "Dibya", "Madhu", "Sandeep", "Akash"];
// for (var i = 0; i < names.length; i++) console.log(names[i] + " ");
for (const index in names) {
  console.log(names[index]);
}
for (const name of names) {
  console.log(name);
}
names.forEach(function (value, index, arrName) {
  console.log(value + "\t" + index + "\t" + arrName[index]);
  //   console.log(arrName[index]);
});

names.forEach((value) => {
  console.log(value);
});
