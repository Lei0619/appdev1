const numbers = [1, 2, 3];
const user = { name: "Lei", age: 20 };

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

//clone and extend array
const clonedNumbers = [...numbers];
const extendedNumbers = [...numbers, 4, 5];

//clone and extend object
const clonedUser = {...user};
const extendedUser = {...user, city: "Pampanga"};

console.log("Cloned numbers:", clonedNumbers);
console.log("Extended numbers:", extendedNumbers);
console.log("Cloned user:", clonedUser);
console.log("Extended user:", extendedUser);
console.log("Sum of 1, 2:", sum(1, 2));
console.log("Sum of multiple numbers:", sum(1, 2, 3, 4));
