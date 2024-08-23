//1. JavaScript will first convert data types to string when it finds different data types:example

1 + "1" // "11"
[1 ,2] + "1" // "1,21"
true + "1" // "true1"

//2.the order of the values matters when you have an object. Writing objects first always returns numeric 1:

{ a: 1 } + "1" // 1
"1" + { a: 1 } // "1[object Object]"
true + { a: 1 } // "true[object Object]"
{ a: 1 } + 1 // 1

//3.JavaScript can calculate between boolean and numeric types, because boolean values true and false implicitly has the numeric value of 1 and 0:

true + 1 // 1+1 = 2
false + 1 // 0+1 = 1
[1,2] + 1 // "1,21"

//4.Type coercion is always performed implicitly. When you assign the value as a variable, the variable type will never change outside of the operation:

let myNumber = 1;
console.log(myNumber + "1"); // prints 11
console.log(myNumber); // still prints number 1 and not string

