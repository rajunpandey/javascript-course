//Returns a static NodeList of all elements that match the specified CSS selector.
//The returned NodeList is static, which means it does not update automatically when the document changes.


const sections = document.querySelectorAll('section');
console.log(sections); // NodeList(4) [section#home, section#about, section#services, section#contact]


//The querySelectorAll method is useful when we want to select multiple elements that match a certain criteria. 
//In the example above, we want to select all the section elements in the document, so we can use the querySelectorAll method to select them.