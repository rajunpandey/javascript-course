//The closest() method searches up the DOM tree for the nearest ancestor element that matches a specified selector. 
//It returns the matching element if found, otherwise it returns null.


/*
//Example 1: returns matching element
<div class="container">
  <p class="message">Hello World!</p>
</div>

const message = document.querySelector('.message');
const container = message.closest('.container');
console.log(container); // returns <div class="container">


In this example, the closest() method is used to find the nearest ancestor element of message that matches the .container selector. 
//Since the container element is the closest ancestor that matches the selector, it is returned and logged to the console.
*/



/*
//Example 2: returns null

<div class="container">
  <p class="message">Hello World!</p>
</div>

const container = document.querySelector('.container');
const message = container.closest('.message');
console.log(message); // returns null


//In this example, the closest() method is used to find the nearest ancestor element of container that matches the .message selector. 
//Since there is no ancestor element of container that matches the selector, the method returns null.

*/