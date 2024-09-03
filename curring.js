//       Currying is a functional programming technique where a function
//       with multiple arguments is transformed into a series of functions,
//       each taking a single argument.

//       Instead of taking all arguments at once, the curried function takes
//        the first argument, returns a new function that takes the next
//        argument, and so on until all arguments are provided. The final
//        function then returns the result.

//       In simpler terms, currying breaks down a function that takes
//       multiple parameters into a chain of functions that each take one
//        parameter.

//         function calculateVolume(length) {
//             return function (breadth) {
//                 return function (height) {
//                     return length * breadth * height;
//                 }
//             }
//         }

const calculateVolume = (length) => (breadth) => (height) =>
  length * breadth * height;
console.log(calculateVolume(4)(5)(6));

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
    };
  };
}

let step1 = sendAutoEmail("admin@gamil.com");
let step2 = step1("New Order Confirmation");

console.log(step2("Hey piyush, Here is something for you"));
