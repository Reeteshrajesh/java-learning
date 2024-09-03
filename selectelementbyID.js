const el = document.getElementById("username");
el.innerText = "jhon Doe";
el.classList.add("red-color", "underline");
// hum remove kar sakate hai yadi user ne pahale hi css use kar rakhi hia to
//ele.classList.remove("red-color")
console.log(el);
// inline style
el.style.textAlign = "center";
el.parentElement.style.background = "grey";
