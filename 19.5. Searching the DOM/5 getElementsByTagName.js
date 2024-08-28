//Returns a list of HTML collection of elements with the specified tag name.
//The HTML collection is ordered and can be accessed by index numbers.


const sections = document.getElementsByTagName('section');
console.log(sections); // HTMLCollection(4) [section#home, section#about, section#services, section#contact]


//The getElementsByTagName method is useful when we want to select multiple elements that have the same tag name.
//In the example above, we want to select all the section elements in the document, so we can use the getElementsByTagName method to select them.