const skateboard = {
  wheels: 4,
  gripColor: "black",
  company: "Toy Machine",
  graphic: "monster graphic",
  kickflip() {
    console.log("SIIIICK DOOD");
  }
}

/*
- Create an Object called `bigfoot` with propterties of `shoesize`, `height`, and `current location`.
- Add some more properties you come up with on your own.
- BONUS: Add a method (or function, same deal) to your bigfoot object!
- 4 min.

*/

// const bigfoot = {
//   shoesize: "25",
//   height: "9 feet",
//   currentLocation: "The Pacific Ocean",
//   roar() {
//     console.log("ROAR");
//   }
// }

// const classroom = {
//   name: "FEWD",
//   sayHello: function () {
//     console.log("Hello")
//   }
// }

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const mySet = new Set([...numArray])

// mySet.add(11)
// console.log(mySet.has(15))

// class Pizza {
//   constructor(name, size) {
//     this.name = name
//     this.size = size
//   }
// }

// const order = new Pizza("Pepperoni", "Large")

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// arr.forEach(function (val) {
//   console.log(val);
// })

// const sum = (arr) => {
//   return arr.reduce((a, b) => a + b);
// };

// console.log(`The sum of our arr = ${sum(arr)}`);

// const arr = [1, 2, "3", "4", 5, 80, "90"]

// let filtered = arr.filter(function (val) {
//   return typeof (val) === "string"
// });

// console.log(filtered);

// const found = arr.findIndex(function (val) {
//   return val > 5;
// })

// console.log(found)

// const isInt = arr.every((val) => {
//   return typeof val === "number"
// });

// console.log(isInt)

// const squared = arr.map((pizza) => {
//   return pizza * pizza;
// })

const arr = [10]

const squared = arr.map(num => num * num);

console.log(squared)

/*

Write an algorithm about waking up.

function wakeUp(time) {
  if (time === "morning") {
    console.log("Get up!")
  }
  if (time === "afternoon") {
    console.log("Get up your lazy bum!")
  }
}
*/

// Create a function it'll take in two arguments: start and end (both are ints)
// If the number is a multiple of 3 I want you to log "Fizz" instead of the num
// If the number is a multiple of 2 I want you to log "Buzz" instead of the num
// If the number is a multiple of 3 AND 5 I want you to log "Fizz Buzz"
// Do not log "Fizz" "Buzz" I want "Fizz Buzz"

function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("Fizz Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 2 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz(1, 100))