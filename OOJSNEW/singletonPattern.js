// let counter = 0;
// class Counter {
//   getInstance() {
//     return this;
//   }
//   getCount() {
//     return counter;
//   }
//   increment() {
//     return ++counter;
//   }
//   decrement() {
//     return --counter;
//   }
// }
//Two instance are getting created so it is not Singleton class or pattern
// var counter1 = new Counter();
// var counter2 = new Counter();
// console.log(counter1.increment());
// console.log(counter2.increment());

//Single class are those in which we can create only and only one instance

let instance;
let counter = 0;
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can  create only one instance of singleton class");
    }
    instance = this;
  }
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}
var counter1 = new Counter();

console.log(counter1.increment());
// Getting error when creating second instance of class
// var counter2 = new Counter();
