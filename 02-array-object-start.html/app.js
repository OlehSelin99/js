/* theory
// const array = [1, 2, 3, 4, 5, 61];
//  console.log(array.length);
// console.log(array[10]);
// console.log(array[array.length - 1]); // array[6 - 1]
// array[0] = "hello";
// console.log(array);
// array[array.length] = 'Oleh'
// console.log(array);
*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value)

const notes = ["Go to the Ihor", "Watch finale of Euro 2024", "Pictures for Danylo"]; 

function render() {
  for (let note of notes)
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
}

render();

function getNoteTemplate(title) {
  return `<li
         class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`;
}

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );
};