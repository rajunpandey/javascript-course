/*
//1.The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. For example, 

let fruits = ["Banana", "Orange", "Apple"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]
*/

/*
//2.The sort() method can also be used to sort numbers in an array. For example, 

let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort();
console.log(numbers); 
//note if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.
*/


/*
//3.To sort numbers correctly, you must provide a compare function.for example
let compare = (a, b) => {
    return a - b;
}
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort(compare);
console.log(numbers); 
*/