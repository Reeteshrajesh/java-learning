const button = document.getElementById("clickButton");
const container = document.getElementById("my-container");
//let ram = 1;
//button.addEventListener("click", () => {
//  const el = document.createElement("li");
//  el.innerText = ram;
//  container.appendChild(el);
//  ram++;
//});

button.addEventListener("click", () => {
  const el = document.createElement("h1");
  el.innerText = "Reetesh kumar";
  container.appendChild(el);
});
