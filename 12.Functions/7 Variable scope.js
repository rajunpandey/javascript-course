//A variable declared inside a function can only be accessed from that function. This is because that variable has a local scope.


/*
//1.These two scopes are important because when you try to access a local variable outside of its scope, you'll get an error. For example:

function greet() {
    let myString = "Hello World!";
  }

  greet();
  console.log(myString);
  */

/*
//2.global variable can be accessed from anywhere, even inside a function:

function greet() {
    let myString = "Hello World!";
  }
  
  greet();
  console.log(myString);
let myString = "Hello World!";

function greet() {
  console.log(myString);
}

greet();
*/

//3.you can also define a local variable with the same name as the global variable without overwriting it.example:

let myString = "Hello World!";

function greet() {
  let myString = "Morning!";
  console.log(myString);
}
greet();  
console.log(myString);

