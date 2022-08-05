import {
  Observable,
  ReplaySubject,
  Subject,
  AsyncSubject,
  BehaviorSubject,
  Subscriber,
} from "rxjs";

// const obs = new Observable((Subscriber) => {
//   Subscriber.next(20);
//   Subscriber.next(30);
//   Subscriber.next(40);
// });

// console.log("observer 1");
// obs.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
// });

// console.log("observer 2");

// obs.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
// });

// const sub = new Subject();
// console.log(" Sub Observer 1");
// sub.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
// });

// sub.next("Hello");
// sub.next("World");
// sub.next("Great day");
// console.log(" Sub Observer 2");

// sub.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
// });

// const sub = new BehaviorSubject("pop");
// console.log(" Sub Observer 1");
// sub.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   complete: () => console.log(`completed 1`),
// });

// sub.next("Hello");
// // sub.complete();
// sub.next("Great day");
// console.log(" Sub Observer 2");

// sub.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   complete: () => console.log(`complete 2`),
// });
// sub.next("Bye");

// const sub = new ReplaySubject(2);
// console.log(" Sub Observer 1");
// sub.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   complete: () => console.log(`completed 1`),
// });

// sub.next("Hi");
// // sub.complete();
// sub.next("Hello");

// sub.next("Welcome");
// console.log(" Sub Observer 2");

// sub.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   complete: () => console.log(`complete 2`),
// });
// sub.next("Bye");

const sub = new AsyncSubject();
console.log(" Sub Observer 1");
sub.subscribe({
  next: (data) => {
    console.log(` first  ${data}`);
  },
  complete: () => console.log(`completed 1`),
});

sub.next("Hi");
// sub.complete();
sub.next("Hello");

sub.next("Welcome");

console.log(" Sub Observer 2");

sub.subscribe({
  next: (data) => {
    console.log(`second ${data}`);
  },
  complete: () => console.log(`complete 2`),
});
sub.next("Bye");
sub.complete();
