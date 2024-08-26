//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. For example,

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((first, second) => {
    return first + second;
});
console.log(sum);