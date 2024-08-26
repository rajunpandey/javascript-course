//The console.time() method is used to start the timer. The console.timeEnd() method is used to end the timer. The time taken by the code between the console.time() and console.timeEnd() methods is printed to the console.

console.time("Time taken");
let x = 5;
let y = 6;
let z = x + y;
console.timeEnd("Time taken"); // time taken by the code between console.time() and console.timeEnd() is printed to the console
