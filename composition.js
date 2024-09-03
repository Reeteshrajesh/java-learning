//       In functional programming, function composition is the
//       process of combining multiple functions to produce a new
//        function. This technique is used heavily in functional
//        programming, but it can also be used in imperative
//        programming.

//            // Basic functions
//            const multiplyBy2 = (x) => x * 2;
//            const add3 = (x) => x + 3;
//
//            // Function composition
//            const composedFunction = (x) => add3(multiplyBy2(x));
//
//            // Using the composed function
//            const result = composedFunction(5);
//            console.log(result); // Output: 13
//

//
//
//
//
//

//        // Generalized compose function
//        const compose =
//          (...fns) =>
//          (x) =>
//            fns.reduceRight((acc, fn) => fn(acc), x);

//        // Example functions
//        const multiplyBy2 = (x) => x * 2;
//        const add3 = (x) => x + 3;
//        const square = (x) => x * x;
//
//        // Composing functions
//        const composedFunction = compose(add3, multiplyBy2, square);
//
//        // Using the composed function
//        const result = composedFunction(3);
//        console.log(result); // Output: 7
//

//
//
//
//
//
// Example functions
////       const getNames = (users) => users.map((user) => user.name);
////       const toUpperCase = (names) => names.map((name) => name.toUpperCase());
////       const joinNames = (names) => names.join(", ");
////
////       // Composing functions
////       const processNames = compose(joinNames, toUpperCase, getNames);
////
////       // Sample data
////       const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
////
////       // Using the composed function
////       const result = processNames(users);
////       console.log(result); // Output: "ALICE, BOB, CHARLIE"
//
//
//
//
//
//

function add(a, b) {
  return a + b;
}
function square(val) {
  return val * val;
}
function addTwoandSquare(a, b) {
  return square(add(a, b));
}
console.log(addTwoandSquare(2, 3));

function add(a, b) {
  return a + b;
}
function square(val) {
  return val * val;
}
const addResult = add(2, 3);
console.log(square(addResult));
