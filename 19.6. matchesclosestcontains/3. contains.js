//The contains() method checks if a specific element is a descendant of another specified element. 
//It returns true if the element is a descendant, otherwise it returns false.


/*
//Example 1: returns true

<div class="container">
  <p class="message">Hello World!</p>
</div>

const container = document.querySelector('.container');
const message = document.querySelector('.message');
if (container.contains(message)) {
  console.log('The container element contains the message element');
} else {
  console.log('The container element does not contain the message element');
}

//In this example, the contains() method is used to check if the container element contains the message element. 
//Since message is a descendant of container, the method returns true, and the console logs "The container element contains the message element".
*/


/*
//Example 2: returns false
<div class="container">
  <p class="message">Hello World!</p>
</div>
<div class="sidebar">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
if (container.contains(sidebar)) {
  console.log('The container element contains the sidebar element');
} else {
  console.log('The container element does not contain the sidebar element');
}


In this example, the contains() method is used to check if the container element contains the sidebar element. 
//Since sidebar is not a descendant of container, the method returns false, and the console logs "The container element does not contain the sidebar element".
*/