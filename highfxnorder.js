const students = ["piyush", "jhon", "satyaam", "reetesh"];

function print(n) {
  console.log(n); //0
}
students.forEach(print);
//// for each vo index
// print vo

// foreach 0 print(o) 0 student[0]
//
//both are same
//
students.forEach((element) => {
  console.log(element + "uttam");
});

// map fxn  .map new array return karata haia but .foreach kuchh return nahi karata
students.map((val) => console.log(val));

//.find
//.findIndex
//includes
//filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = numbers.filter((num) => num % 2 == 0);
console.log(newArr);

//slice
let newArr1 = numbers.slice(1, 5);
console.log(newArr1);
//splice
let newArray = numbers.splice(1, 4);
console.log(newArray); //[ 2, 3, 4, 5 ]
console.log(numbers); //[ 1, 6, 7, 8, 9 ]
