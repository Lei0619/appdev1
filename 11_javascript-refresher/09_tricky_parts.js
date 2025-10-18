console.log("== vs ===");
console.log("5 == '5':", 5 == '5');
console.log("5 === '5':", 5 === '5');

let noValue;
let emptyValue = null;

console.log("noValue:", noValue);
console.log("emptyValue:", emptyValue);

const person = {
  name: 'John',
  sayName: function() {
    console.log("Regular function says:", this.name);
  },
  sayNameArrow: () => {
    console.log("Arrow function says:", this.name);
  }
};

person.sayName();
person.sayNameArrow();

let list1 = [1, 2, 3];
let list2 = list1;
list2.push(4);
console.log("list1 after changing list2:", list1);

let list3 = [1, 2, 3];
let list4 = [...list3];
list4.push(4);
console.log("list3 after changing list4:", list3);
console.log("list4:", list4);
