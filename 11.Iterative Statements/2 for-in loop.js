/*
//A for-in loop is a variant of the for loop that is used to iterate over the properties of an object.syntax
for (let property in object) {
  // code block to be executed
}
  */

//example

let person = {
    name: "rajun",
    age: 25,
    gender: "male"
  };
  
  for (let x in person) {
    console.log(x + ": " + person[x]);
  }

  //This code will print each property of the person object and its corresponding value to the console.