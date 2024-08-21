// const car = {
//   model: "Tesla",
//   year: 2023,
// };

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

// console.log(json)
// console.log(parsed)

const list = document.querySelector("#list");

async function start() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await resp.json();
    console.log(data);
  } catch (err) {}
}

function render(users = []) {
  
}

function toHTML(user) {
  return `
  <li class="list-group-item">${user.name}</li>
  `;
}

start();
