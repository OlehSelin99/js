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

let mode = "time";

const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

console.log(output.textContent);

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");

timeBtn.onclick = bindMode("time");

dateBtn.onclick = bindMode("date");

update();
setInterval(update, 1000);

function update() {
  console.log(output.textContent);
  output.textContent = format(mode);
  console.log(output.textContent);
}

// Pure Function
function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
