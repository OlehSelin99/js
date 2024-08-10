// const now = new Date();

// const start = new Date(1000 * 60 * 60 * 24 * 365);

// const date = new Date(2024, 7, 10, 21, 40);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());

// now.setFullYear(2055)

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());

// ======

const printTime = document.getElementById("output");
const btnFull = document.getElementById("full");
const btnDate = document.getElementById("date");
const btnTime = document.getElementById("time");

printTime.textContent = new Date().toTimeString();

btnFull.onclick = function () {
    printTime.textContent = new Date().getFullYear();
};

btnDate.onclick = function () {
    printTime.textContent = new Date().getDate();
};

btnTime.onclick = function () {
    printTime.textContent = new Date().toTimeString();
};
