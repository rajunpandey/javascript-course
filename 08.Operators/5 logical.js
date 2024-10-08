//The && operator returns true if both operands are truthy, and false otherwise. Here's an example:

const a = 10;
const b = 20;
const c = 30;

console.log(a < b && b < c); // true
console.log(a < b && b > c); // false


//The || operator returns true if at least one of the operands is truthy, and false otherwise. Here's an example:

const x = 5;
const y = 10;

console.log(x > 3 || y < 5); // true
console.log(x < 3 || y < 5); // false


//The ! operator returns the opposite of the operand's truthiness. If the operand is truthy, ! returns false. If the operand is falsy, ! returns true. Here's an example:

const z = 10;

console.log(!(z > 5)); // false
console.log(!(z < 5)); // true