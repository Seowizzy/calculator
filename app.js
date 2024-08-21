"use strict";

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plussBtn = document.getElementById("pluss");
const minusBtn = document.getElementById("minus");
const multiplicationBtn = document.getElementById("multiplication");
const separationBtn = document.getElementById("separation");
const computeBtn = document.getElementById("compute");
let press = "+";

plussBtn.onclick = function () {
  press = "+";
};

minusBtn.onclick = function () {
  press = "-";
};

multiplicationBtn.onclick = function () {
  press = "*";
};

separationBtn.onclick = function () {
  press = "/";
};

computeBtn.onclick = function () {
  if (press == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  } else if (press == "-") {
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  } else if (press == "*") {
    const sum = Number(input1.value) * Number(input2.value);
    resultElement.textContent = sum;
  } else if (press == "/") {
    const sum = Number(input1.value) / Number(input2.value);
    resultElement.textContent = sum;
  }
};

// Знаю что в конце должен быть просто else без if но почему то не работает(
// В звонке можем оптимизорвать код. Мне кажется. его можно сделать поменьше
