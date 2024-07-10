const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("divison");

const submitBtn = document.getElementById("submit");
let action = "+";

function printResultWithColor(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "blue";
  }
  resultElement.textContent = result;
}

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

multiplyBtn.onclick = function () {
  action = "*";
};

divisionBtn.onclick = function () {
  action = "/";
};

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  // return actionSymbol == "+"
  //   ? num1 + num2
  //   : actionSymbol == "-"
  //   ? num1 - num2
  //   : actionSymbol == "*"
  //   ? num1 * num2
  //   : actionSymbol == "/" ? num1 / num2

  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResultWithColor(result);
};
