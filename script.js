const button = document.querySelectorAll("button");
const display = document.getElementById("display");

button[0].addEventListener("click", () => {
  display.value = "";
});
button[1].addEventListener("click", () => {
  display.value = "-" + display.value;
});
button[2].addEventListener("click", () => {
  display.value /= 100;
});
button[3].addEventListener("click", () => {
  display.value += "/";
});
button[4].addEventListener("click", () => {
  display.value += 7;
});
button[5].addEventListener("click", () => {
  display.value += 8;
});
button[6].addEventListener("click", () => {
  display.value += 9;
});
button[7].addEventListener("click", () => {
  display.value += "*";
});
button[8].addEventListener("click", () => {
  display.value += 4;
});
button[9].addEventListener("click", () => {
  display.value += 5;
});
button[10].addEventListener("click", () => {
  display.value += 6;
});
button[11].addEventListener("click", () => {
  display.value += "-";
});
button[12].addEventListener("click", () => {
  display.value += 1;
});
button[13].addEventListener("click", () => {
  display.value += 2;
});
button[14].addEventListener("click", () => {
  display.value += 3;
});
button[15].addEventListener("click", () => {
  display.value += "+";
});
button[16].addEventListener("click", () => {
  display.value += 0;
});
button[17].addEventListener("click", () => {
  display.value += ".";
});
button[18].addEventListener("click", () => {
  display.value = eval(display.value);

});
let clock = document.getElementById("clock");
let minitues = document.getElementById("min");
setInterval(() => {
  let a = new Date();
  let time = a.getHours();
  let min = a.getMinutes();
  clock.innerText = time;
  minitues.innerText = min;
}, 1000);
