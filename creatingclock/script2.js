const button = document.getElementById("stop-btn");

function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}
// showTime();
let interval = setInterval(showTime, 1000);

// settimeout(() => console.log("hi"),5000);---after 5 sec only one time
// setInterval(() => console.log("hi"),5000);---har 5 sec ke baad aata rahega

button.addEventListener("click", () => {
  clearInterval(interval);
});
