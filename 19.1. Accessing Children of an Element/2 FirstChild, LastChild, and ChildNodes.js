//1.firstChild: returns the first child of the element.
//2.lastChild: returns the last child of the element.
//3.childNodes: returns a list of all the child nodes of the element.




//For example, to access the first child, last child, and all child nodes of the body element:

console.log(document.body.firstChild); // <h1>I am Child of body</h1>
console.log(document.body.lastChild); // <script src="script.js"></script>
console.log(document.body.childNodes); // NodeList [ #text, <h1>, #text, <p>, #text, <script> ]






//Note that the childNodes property returns a NodeList object, which is not an actual array. To convert it into an array, we can use the Array.from() method.

console.log(Array.from(document.body.childNodes));