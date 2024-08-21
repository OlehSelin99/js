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
  list.innerHTML = "Loading ...";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await resp.json();
    console.log(data);
    setTimeout(() => {
      render(data);
    }, 2000);
  } catch (err) {
    list.innerHTML = err.message;
  }
}

function render(users = []) {
  const html = users.map(toHTML).join(""); // html is array
  list.innerHTML = html;
}

function toHTML(user) {
  return `
  <li class="list-group-item">${user.name}</li>
  `;
}

start();
