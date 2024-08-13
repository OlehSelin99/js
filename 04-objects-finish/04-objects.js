console.log("test");

const person = {
  name: "Oleh",
  age: 24,
  isPosttmam: true,
  languages: ["Ukrainian", "English"],
  address: {
    city: "Lviv",
    street: "Paporotna",
  },
  "complex key": "complex value",
  [1 + 2]: "computed value",
  greet() {
    console.log("Greet from person");
  },

  // function
  arrow: () => {
    console.log("Person Arrow");
  },

  info() {
    console.log("Person name", person.name);
  },
};

console.log(typeof person.arrow);
console.log(typeof person.greet);

person.info();

person.greet();
person.arrow();

console.log(person);

console.log(typeof person);
console.log(typeof null);
