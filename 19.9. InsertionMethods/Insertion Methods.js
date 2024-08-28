//In HTML, there are several ways to insert new content or modify existing content dynamically using JavaScript. 
//These are known as HTML insertion methods.

/*
//Consider the following HTML:

<!DOCTYPE html>
<html>
<head>
	<title>Lesson 43</title>
</head>
<body>
	<div class="container">
        <div id="first">I am first element</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
*/

//1.Classic Way to Insert HTML

//A classical way to insert HTML is by using the innerHTML property.
// For example, let's say we want to add an h1 element with the text "Hello World" inside the first div. We can do this using the following code:

let a = document.getElementsByTagName('div')[0];
a.innerHTML = '<h1>Hello World</h1>';


//We could also append new HTML to the existing HTML inside the div element. For example:

let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';





/*
//2.Using createElement to Insert HTML

//Another way to insert HTML is by creating an element using createElement method and then appending it to the target element using appendChild.
// For example, let's say we want to add an h1 element with the text "Hello World" inside the first div. We can do this using the following code:

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
a.appendChild(div);

*/