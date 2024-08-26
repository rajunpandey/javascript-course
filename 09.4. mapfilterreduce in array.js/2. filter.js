//it creates a new array with all elements that pass the test implemented by the provided function. For example,

let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter((i) => {
    return i > 3;
});
console.log(filteredNumbers);