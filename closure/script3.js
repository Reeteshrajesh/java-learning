// ---------    A closure is the combination of a function bundled together
//              (enclosed) with references to its surrounding state
//               (the lexical environment). In other words, a closure gives a
//               function access to its outer scope. In JavaScript, closures
//               are created every time a function is
//               created, at function creation time.

//           function init() {
//               var name = "Mozilla"; // name is a local variable created by init
//               function displayName() {
//                 // displayName() is the inner function, that forms a closure
//                 console.log(name); // use variable declared in the parent function
//               }
//               displayName();
//             }
//             init();

//           function makeFunc() {
//               const name = "Mozilla";
//               function displayName() {
//                 console.log(name);
//               }
//               return displayName;
//             }
//
//             const myFunc = makeFunc();
//             myFunc();

// const makeCounter = function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment() {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1.value()); // 0.

// counter1.increment();
// counter1.increment();
// console.log(counter1.value()); // 2.

// counter1.decrement();
// console.log(counter1.value()); // 1.
// console.log(counter2.value()); // 0.

const myName = document.getElementById("my-name");
const btn = document.getElementById("sizer");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);
const size70 = makeTextSizer(70);

btn.addEventListener("click", size12);
