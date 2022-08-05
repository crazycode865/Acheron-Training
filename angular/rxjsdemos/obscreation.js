import { interval, Observable, of } from "rxjs";
// let obs = of(10, 20, 30);

// const observer = {
//   next: (data) => {
//     console.log(data);
//   },
//   error: (error) => {
//     console.log(error);
//   },
//   complete: () => {
//     console.log(`complete`);
//   },
// };
// obs.subscribe(observer);

// obs.subscribe({ next: (data) => console.log(data) });

// let obs1 = interval(10);
// obs1.subscribe({
//   next: (data) => console.log(data),
// });

// let obs2 = new Observable((subscribe) => {
//   subscribe.next("apple");
//   subscribe.next("orange");
//   subscribe.error("grapes");
//   subscribe.next("melon");
//   subscribe.next("mango");
// });
// console.log(`Hello....`);
// obs2.subscribe({
//   next: () => {
//     console.log(`inside next`);
//     console.log(data);
//   },
//   next: (data) => console.log(data),
//   error: (error) => console.log(error),
//   complete: () => console.log(`completed`),
// });

let obs2 =
  new Observable() <
  string >
  ((subscribe) => {
    console.log(`Welcome`);
    setTimeout(() => subscribe.next("kiwi"), 5000);
    subscribe.next("apple");
    subscribe.next("orange");
    //   subscribe.error("grapes");
    setTimeout(() => subscribe.next("blueberry"), 3000);
    subscribe.next("melon");
    subscribe.next("mango");
    console.log(`fruits`);
  });

console.log(`Hello....`);

obs2.subscribe({
  next: () => {
    console.log(`inside next`);
    console.log(data);
  },
  next: (data) => console.log(data),
  error: (error) => console.log(error),
  complete: () => console.log(`completed`),
});
