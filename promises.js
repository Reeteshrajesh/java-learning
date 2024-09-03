// sync and async task
let a = 24;
let b = 45;
let result = a + b;

async function getData() {
  let resultfromServer = await fetch(
    "https://jsonplaceholder.typicode.com/post"
  );
  console.log(await resultfromServer.json());
}

// fetch("https://jsonplaceholder.typicode.com/post")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
getData();
console.log(result);
