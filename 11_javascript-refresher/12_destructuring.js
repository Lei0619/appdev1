const person = {
  name: "Lei", 
  age: 30
};

const hobbies = ["reading", "coding"]; 

function printName(person) {
  console.log(person.name);
}

const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`);

const [hobby1, hobby2] = hobbies;
console.log(`Hobbies: ${hobby1}, ${hobby2}`);

function printNameDestructured({ name }) {
  console.log(name);
}

printName(person);
printNameDestructured(person); 
