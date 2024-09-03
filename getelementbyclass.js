// ye element deta hai

const ele = document.getElementsByClassName("block");
//console.log(ele);
for (let i = 0; i < ele.length; i++) {
  ele.item(i).style.background = "blue";
}
