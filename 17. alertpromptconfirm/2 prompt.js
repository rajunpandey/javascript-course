//1.prompt() displays a message to the user in a pop-up window and waits for the user to enter a value. The value entered by the user is then saved in a variable.

alert("You will be asked your name after you press OK.");
let name = prompt("What is your name?"); // user input will be stored in name variable
alert("Hello " + name + "!"); // displays "Hello [user input]!" in a pop-up window



//2.You can also set a default value for the prompt using the second parameter. The default value will appear in the prompt as a pre-written text.

let num = prompt("Enter a number", 29); // the default value is 29
alert("You entered " + num); // displays "You entered [user input]!" in a pop-up window