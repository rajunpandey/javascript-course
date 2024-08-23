/*
//A do-while loop is a type of loop that executes a block of code at least once, and then repeatedly executes the block of code while a particular condition is true.

//Syntax


do {
  // code to be executed
} while(condition);
 */

//example

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);