// console.log("test");

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
    console.log("Person name", this.name);
  },
};

// console.log(person.address);
// const addressKey = "address";
// console.log(person[addressKey]);
// console.log(person['complex key']);

// person.age++
// person.languages.push('German')

// console.log(person.age)
// console.log(person.languages)

// person.address = undefined
// delete person.address
// console.log(person)

// Destructoring
// const age = person.age;
// const name = person.name;
// const languages = person.languages;

// const name = "Ihor";

// const { age, name: firstName = 'ola la la', languages } = person;

// console.log(age, name, languages, firstName);

// hasOwnPropety - цим я можу отримати лише власні ключі,
// не заходячі у прототипи
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     //console.log(key)
//     console.log(person[key]);
//   }
// }

// console.dir(Object)

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// });

const logger = {
  keys(withText = true) {
    if (withText) {
      console.log("Object keys: ", Object.keys(this));
    } else {
      console.log(Object.keys(this));
    }
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key: ", key);
      console.log("Value: ", this[key]);
    });
  },
};

// const bound = logger.keys.bind(person, false);
// bound();
// logger.keys.call(person, true);
// logger.keys.apply(person, [false]);
