"use strict";

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
// const plussBtn = document.getElementById("pluss");
// const minusBtn = document.getElementById("minus");
// const multiplicationBtn = document.getElementById("multiplication");
// const separationBtn = document.getElementById("separation");
const computeBtn = document.getElementById("compute");
let plusBtn = "+";
let minusBtn = "-";
let multiplicationBtn = "*";
let separationBtn = "/";

// plussBtn.onclick = function () {
//   pressBtn = "+";
// };

// minusBtn.onclick = function () {
//   pressBtn = "-";
// };

// multiplicationBtn.onclick = function () {
//   pressBtn = "*";
// };

// separationBtn.onclick = function () {
//   pressBtn = "/";
// };

// computeBtn.onclick = function () {
//   if (press == "+") {
//     const sum = Number(input1.value) + Number(input2.value);
//     resultElement.textContent = sum;
//   } else if (press == "-") {
//     const sum = Number(input1.value) - Number(input2.value);
//     resultElement.textContent = sum;
//   } else if (press == "*") {
//     const sum = Number(input1.value) * Number(input2.value);
//     resultElement.textContent = sum;
//   } else if (press == "/") {
//     const sum = Number(input1.value) / Number(input2.value);
//     resultElement.textContent = sum;
//   }
// };

computeBtn.onclick = function () {
  switch ((plusBtn, minusBtn, multiplicationBtn, separationBtn)) {
    case "plusBtn":
      resultElement.textContent = Number(input1.value) + Number(input2.value);
      break;

    case "-":
      resultElement.textContent = Number(input1.value) - Number(input2.value);
      break;

    case "*":
      resultElement.textContent = Number(input1.value) * Number(input2.value);
      break;

    case "/":
      resultElement.textContent = Number(input1.value) / Number(input2.value);
      break;
  }
};

// case "-":
//   resultElement.textContent = Number(input1.value) - Number(input2.value);
//   break;

// case "*":
//   resultElement.textContent = Number(input1.value) / Number(input2.value);
//   break;

// case "/":
//   resultElement.textContent = Number(input1.value) * Number(input2.value);
//   break;

// Знаю что в конце должен быть просто else без if но почему то не работает(
// В звонке можем оптимизорвать код. Мне кажется. его можно сделать поменьше
