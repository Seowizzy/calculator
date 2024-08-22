"use strict";

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const computeBtn = document.getElementById("compute");
let plusBtn = "+";
let minusBtn = "-";
let multiplicationBtn = "*";
let separationBtn = "/";

computeBtn.onclick = function () {
  switch ((plusBtn, minusBtn, multiplicationBtn, separationBtn)) {
    case "+":
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
