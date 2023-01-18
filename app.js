let button = document.getElementsByClassName("panel1")[0];
let button1 = document.getElementsByClassName("panel2")[0];
let button2 = document.getElementsByClassName("panel3")[0];
let button3 = document.getElementsByClassName("panel4")[0];
var body = document.getElementsByTagName("BODY")[0];

function bgc(a) {
  button.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function bgc1(a) {
  button1.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function bgc2(a) {
  button2.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function bgc3(a) {
  button3.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

button.addEventListener("click", bgc);
button1.addEventListener("click", bgc1);
button2.addEventListener("click", bgc2);
button3.addEventListener("click", bgc3);
window.onload = bgc;
