//When defining a function, you can set a default value for any parameter in that function
/*

//1.For example, 
function greet(name = "rajun") {
    console.log(`Hello, ${name}!`);
    console.log("Nice weather today, right?");
  }
  greet();
greet("ram");
//Here, the default value 'rajun' will be used when no value or undefined is passed for the name parameter.
*/

/*

//2.example of a function that has one default parameter called name and one non-default parameter called weather:
function greet(weather, name = "rajun") {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
  }
  greet("sunny");

  */

  /*
//3.example
  function greet(name = "rajun", weather) {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
  }
  
  greet(undefined, "sunny");
//To pass an argument to the weather parameter, we need to pass undefined or any value for the name parameter first.

  */