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

const notes = ["Meet with Svitlana", "Meet with Boys"];

console.log(notes);

function render() {
  for (let note = notes[0]; note++; ) {
    listElement.insertAdjacentHTML(
      "beforeend"`<li
         class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${note}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`
    );
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
};
