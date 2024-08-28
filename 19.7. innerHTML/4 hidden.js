//hidden is a property of a DOM element that is used to get or set the visibility of an element. 
//It is a boolean property, so it can be either true or false. In the above HTML code that we used,
// we can set the hidden property of the span element to true, like this:


document.getElementsByTagName('span')[0].hidden = true;


//Now, if we reload the page, we will see that the span element is no longer visible. 
//We can also set the hidden property to false to make the element visible again.