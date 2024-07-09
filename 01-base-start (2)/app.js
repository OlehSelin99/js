// const isProgrammer = true;
// isProgrammer = false

// let num = 1;
// let num1 = num + 1;
// let num2 = num + 1;

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const submitBtn = document.getElementById("submit");
let action = "plus";
//const btnMinus = document.getElementById("minus");

function computeNumbersWithAction(input1, input2, actionSymbol) {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  }

  if (actionSymbol == "-") {
    return num1 - num2;
  }
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "blue";
  }
  resultElement.textContent = result;
}

plusBtn.onclick = function () {
  action = "plus";
};

minusBtn.onclick = function () {
  action = "minus";
};

submitBtn.onclick = function () {
  function computeNumbersWithAction(input1, input2, actionSymbol) {
    printResult(result);
  }
};
