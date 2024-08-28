/*
//When working with the Document Object Model (DOM) in JavaScript,
// you will often need to traverse the DOM tree to find specific elements or perform certain actions on them.
// The matches(), closest(), and contains() methods are commonly used in DOM manipulation to navigate the DOM tree and find specific elements.

*/



//matches()
//The matches() method checks if an element matches a specific CSS selector.
// It returns true if the element matches the selector, otherwise it returns false.

/*
//Example 1: returns true

<div class="container">
  <p class="message">Hello World!</p>
</div>
const message = document.querySelector('.message');

if (message.matches('.message')) {
  console.log('The element matches the selector');
} else {
  console.log('The element does not match the selector');
}


In this example, the matches() method is used to check if the message element matches the .message selector.
Since the message element has a class of message, the method returns true, and the console logs "The element matches the selector".
*/



/*
//Example 2: returns false

<div class="container">
  <p class="message">Hello World!</p>
</div>
const container = document.querySelector('.container');

if (container.matches('.message')) {
  console.log('The element matches the selector');
} else {
  console.log('The element does not match the selector');
}

In this example, the matches() method is used to check if the container element matches the .message selector.
Since the container element does not have a class of message, the method returns false, and the console logs "The element does not match the selector".

*/