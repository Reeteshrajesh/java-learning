// arrow function
// syntax
// function sayhello() {
//    console.log("hello babes ");
// }
// sayhello();

const sayhello = () => {
  console.log("hey");
};
sayhello();
sayhello();

const add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

// for one liners
const addv = (a, b) => a + b;
console.log(addv(3, 6));

//Argument key word is not defined for arrow fxn
//so we can use spread approach

const addNumbers = (...nums) => {
  console.log(nums);
};
addNumbers(10, 23, 33, 56.76);

// hoisting
// hoisting is not working for arrow fxn
// hoisting is like you can ask fnx before making fxn

/// this keyword

const obj = {
  value: 20,
  myFunction: function () {
    console.log(this.value);
  },
};
obj.myFunction();

// but if we use this fxn as arrow fxn then this is working as window fxn becaouse arrow fxn as a global fxn
