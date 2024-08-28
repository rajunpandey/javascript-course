//Consider the following HTML code:
/*
<html>
<head>
	<title>Lesson 47</title>
</head>
<body>
    <div id="container">
        <button onclick="alert('hello')">Click me</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
*/
//As you can see, the onclick attribute is used to handle the button click event.
// In this case, when the button is clicked, an alert box with the message "hello" will appear.

//Now, you might be wondering if you can write more complex JavaScript code in the onclick attribute. 
//The answer is yes, but it's not practical to do so. For example, you could write:

<button onclick="alert('hello'); let a=29; console.log(a+2878);">Click me</button>

//However, this approach quickly becomes unwieldy and difficult to read. Instead, we can handle events in JavaScript code separate from our HTML markup.

let container = document.getElementById("container");
container.onclick = function() {
	console.log("Hey, this is logged from the JavaScript script!");
}

//In the example above, we use the getElementById method to select the div element with the id attribute of "container". 
///We then attach an event listener to this element using the onclick property