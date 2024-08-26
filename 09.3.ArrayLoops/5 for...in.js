//The for...in statement creates a loop iterating over enumerable properties of an object. For example, 

let fruits = ["Apple", "Orange", "Banana"];
for (let i in fruits) {
    console.log(fruits[i]);
}

//In the above code, the for...in statement iterates over the array fruits. 
//The for...in statement will stop when it reaches the end of the array. 
//In objects, the for...in loop gives you the keys of the object and array is an object too. 
//The keys in arrays are the indexes of the elements.
// So, the for...in loop will iterate over the indexes of the array and print the elements of the array.