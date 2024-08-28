//Returns the first element that matches the specified CSS selector.
//If no elements match the specified selector, the method will return null.

const home = document.querySelector('#home');
console.log(home); // <section id="home">...</section>

//The querySelector method is useful when we want to select the first element that matches a certain criteria. 
//It is similar to the querySelectorAll method, but it only returns the first element that matches the criteria. 
//Which is equivalent to document.querySelectorAll('section')[0].