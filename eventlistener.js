// <!-- <button onclick="console.log(' clicked bro')">ckick me </button> -->
// <!-- ye humm kahi bhi laga sakate hai  -->

// 2nd tarika
// function handleButtonClick() {
//   console.log("hey clicked bro");
//   alert("hey i am clicked bus kar ab");
// }

// 3rd tarika

// const elem = document.getElementById("clickButton");

// elem.onclick = function () {
//   console.log("hey i am clicked ");
// };

// is mathod me ek dikkat hai ki yadi koi aur ne same me koi dusara click event laga dia to vo pahale vala event listener kaam nahin karega
// 4rth way most preffered way to use event lisner

const elem = document.getElementById("clickButton");

function doSomething() {
  console.log("i am clicked ");
}
elem.addEventListener("click", doSomething);

// same as above
// elem.addEventListener("click", () => {
//     console.log("hey babes clicked")
// })

// toggling effect
const nameBlock = document.getElementById("nameBlock");

elem.addEventListener("click", () => {
  if (nameBlock.style.color === "red") {
    nameBlock.style.color = "blue";
  } else {
    nameBlock.style.color = "red";
  }
});
