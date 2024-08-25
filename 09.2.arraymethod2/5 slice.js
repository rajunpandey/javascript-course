/*
//1.The slice() method returns a shallow copy of a portion of an array into a new array object. The original array will not be modified.

let fruits = ["Apple", "Orange", "Banana"];
let copy = fruits.slice();
console.log(copy); 
*/



//2.The slice() method can also be used to return a shallow copy of a portion of an array into a new array object. For example,

let fruits = ["Apple", "Orange", "Banana"];
let copy = fruits.slice(0, 2);
console.log(copy); 
