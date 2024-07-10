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

plusBtn.onclick = function () {
  action = "plus";
};

minusBtn.onclick = function () {
  action = "minus";
};



submitBtn.onclick = function () {
  if ((action == "plus")) {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  } else if ((action == "minus")) {
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  }
};
