const name = "Ihor";
const age = 2;

function getAge() {
  return age;
}

// const old = "hello my name is " + name + " and my age is " + age;
const output = `hello my is ${name} and my age is ${
  getAge() > 18 ? "Can drive" : `Can't drive`
}`;

console.log(output);
