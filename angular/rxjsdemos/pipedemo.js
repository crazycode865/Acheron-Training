import {
  interval,
  Observable,
  of,
  take,
  map,
  observable,
  filter,
  reduce,
  first,
  skipLast,
  from,
  pipe,
} from "rxjs";
// let ob = interval(1000).pipe(take(10));
// ob.subscribe({
//   next: (data) => console.log(data),
// });
// let obs = of(1, 2, 3, 4, 5).pipe(
//   take(3),
//   map((v) => v * 10)
// );
// obs.subscribe({
//   next: (data) => console.log(data),
// });

// let obsCourses = of(
//   "Javascript",
//   "java",
//   "Spring",
//   "Angular",
//   "Hibernate"
// ).pipe(
//   take(5),
//   map((v) => v.toUpperCase())
// );
// obsCourses.subscribe({
//   next: (data) => console.log(data),
// });

// //Even number sum
// let obNumber = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14).pipe(
//   filter((num) => num % 2 === 0),
//   reduce((acc, val) => acc + val, 0)
// );
// obNumber.subscribe({
//   next: (data) => console.log(data),
// });

// //Fruits contains p
// let fruits = of("Orange", "mango", "pineapple", "pears", "papaya").pipe(
//   filter((fruit) => fruit.includes("p"))
// );
// fruits.subscribe({
//   next: (data) => console.log(data),
// });

// ob.pipe(first()).subscribe({
//   next: (data) => console.log(data),
// });

// ob.pipe(skipLast()).subscribe({
//   next: (data) => console.log(data),
// });

//Books with author
// const books = [
//   { title: "Java", author: "John", cost: "123" },
//   { title: "Angular", author: "Kathy", cost: "876" },
//   { title: "Spring", author: "John", cost: "456" },
//   { title: "Secret", author: "Rhonde", cost: "875" },
//   { title: "War and Peace", author: "Leo Tolstoy", cost: "752" },
// ];

// let bookObs = from(books)
//   .pipe(filter((book) => book.author === "John"))
//   .subscribe({
//     next: (data) => {
//       console.log(data);
//     },
//   });
