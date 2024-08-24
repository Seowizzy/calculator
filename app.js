"use strict";

const RESULT = document.getElementById("result");
const INPUT_1 = document.getElementById("input1");
const INPUT_2 = document.getElementById("input2");
const PLUSS_BTN = document.getElementById("pluss");
const MINUS_BTN = document.getElementById("minus");
const MULTIPLICATION_BTN = document.getElementById("multiplication");
const SEPARATION_BTN = document.getElementById("separation");
const COMPUTE_BTN = document.getElementById("compute");
let operation = "";

PLUSS_BTN.addEventListener("click", () => {
  operation = "+";
  console.log(operation);
});

MINUS_BTN.addEventListener("click", () => {
  operation = "-";
  console.log(operation);
});

MULTIPLICATION_BTN.addEventListener("click", () => {
  operation = "*";
  console.log(operation);
});

SEPARATION_BTN.addEventListener("click", () => {
  operation = "/";
  console.log(operation);
});

COMPUTE_BTN.onclick = function () {
  switch (operation) {
    case "+":
      RESULT.textContent = Number(INPUT_1.value) + Number(INPUT_2.value);
      break;

    case "-":
      RESULT.textContent = Number(INPUT_1.value) - Number(INPUT_2.value);
      break;

    case "*":
      RESULT.textContent = Number(INPUT_1.value) * Number(INPUT_2.value);
      break;

    case "/":
      RESULT.textContent = Number(INPUT_1.value) / Number(INPUT_2.value);
  }
};
