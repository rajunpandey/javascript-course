/*

//1.The map() method creates a new array with the results of calling a provided function on every element in the calling array. For example

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((i) => {
    return i * 2;
});
console.log(doubledNumbers);

//In the above code, the map() method takes a callback function as an argument.
// The callback function takes the current element as an argument.
// The map() method will call the callback function once for each element in the array. 
//The callback function returns the new value of the element.
// The map() method creates a new array with the new values returned by the callback function.
// The new array is assigned to the variable doubledNumbers.

*/






//2.The map() method is very useful when you want to transform the elements of an array. For example, 
let numbers = [1, 2, 3, 4, 5];
let stringNumbers = numbers.map((i) => {
    return i.toString();
});
console.log(stringNumbers);

// The new array is assigned to the variable stringNumbers.
//It is important to note that the map() method does not change the original array. 
//The map() method creates a new array with the new values returned by the callback function. 
//The original array remains unchanged.