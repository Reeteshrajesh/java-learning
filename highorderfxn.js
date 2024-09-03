//high order fxn(a fxn calls anothor fxn) and callbacks

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}
add(2, 4, (val) => console.log(val)); // 2,4 esult 6
add(2, 45, (res) => console.log(res));

// kya ek fxn

function add(a, b) {
  return a + b;
}
console.log(add(2, 4));

function add(a, b) {
  let result = a + b;
  return result;
}
console.log(add(2, 4));
