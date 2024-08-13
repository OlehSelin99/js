//  Function Declaration
// // // function greet(name) {
// // //   console.log("Hello - ", name);
// // // }

// // // // Function Expresion
// // // const greet2 = function (name) {
// // //   console.log("2 Hello - ", name);
// // // };

// // // greet("Oleh");
// // // greet2("Oleh");

// // // console.log(typeof greet)
// // // console.dir(greet)

// // // setTimeout(function(){
// // //     greet("Oleh Selin")
// // // }, 1500)

let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1000);

//  Arrow Functions
// // // function greet(name) {
// // //   console.log("Hello - ", name);
// // // }

// // // const arrow = (name) => {
// // //   console.log("Hello - ", name);
// // // };

// // // const arrow2 = (name) => console.log("Hello - ", name);

// // // function abs(num1, num2) {
// // //   return Math.abs(num1, num2);
// // // }

// // // const abs2 = (num1, num2) => Math.abs(num1, num2);

// // // console.log(abs2(2, 3));

//  Default Parameters
// // const sum = (a, b) => a + b;
// // console.log(sum(40, 2));

// // function sumAll(...numbers) {
// //   // let res = 0;
// //   // for (let num of numbers) {
// //   //   res += num;
// / }
//  return res;
//   return numbers.reduce((acc, cur) => (acc += cur), 0);
//  }

//  console.log(sumAll(1, 2, 3, 4, 5));

//  Closures

// function createPerson(name) {
//   return function (lastname) {
//     console.log(name + " " + lastname);
//   };
// }

// const addLastName = createPerson("Oleh");

// addLastName("Selin");
