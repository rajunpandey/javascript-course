//innerHTML is a property of a DOM element that is used to get or set the HTML content inside an element as a string. 
//For example, if we log first.innerHTML, where first is a reference to the span element in the previous example, it will show the output as:

console.log(first.innerHTML); // output: Hey I am span



//We can also change the inner HTML of an element, like this:

first.innerHTML = "Hey I am changed"; // reload the page to see the change



//outerHTML, on the other hand, is a property of a DOM element that is used to get or set the HTML content of an element as a string, including the original element itself. For example, if we log first.outerHTML, where first is a reference to the span element in the previous example, it will show the output as:

console.log(first.outerHTML); // output: <span>Hey I am span</span>



//We can also change the outer HTML of an element, like this:

first.outerHTML = "<h1>Hey I am changed</h1>"; // reload the page to see the change



//It's important to note that innerHTML is only valid for element nodes. For other node types (such as text and comment nodes), we can use nodeValue or data. For example:

first.outerHTML = "<div>Hey</div>";
console.log(document.body.firstChild); // " Hello World "




//Here, the firstChild of the body element is a text node that contains the original content "Hello World". But if we log document.body.firstChild.data, it will show the output as: "\n  Hello world\n" The nodeValue property will also give the same result:

console.log(document.body.firstChild.nodeValue); // "\n  Hello world\n"