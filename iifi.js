const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0

// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();

//   // firstVariable and secondVariable will be discarded after the function is executed.

//using IIFE
// const data = (async () => await fetch());

// without using iife
// let data
// async function getData() {
//     data = await fetch()

// }
// getData();

//       An IIFE (Immediately Invoked Function Expression) is a JavaScript
//       function that runs as soon as it is defined.

//       It is a design pattern which is also known as a Self-Executing
//       Anonymous Function and contains two major parts:

// Use cases
// Avoid polluting the global namespace
// Because our application could include many functions and
//  global variables from different source files, it's important
//   to limit the number of global variables. If we have some
//   initiation code that we don't need to use again, we could
//   use the IIFE pattern. As we will not reuse the code again,
//   using IIFE in this case is better than using a function
//    declaration or a function expression.
