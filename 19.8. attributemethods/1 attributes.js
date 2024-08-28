// HTML attributes provide additional information about HTML elements, and they can be accessed and manipulated using JavaScript.

//Consider the following HTML code:
/*
<!DOCTYPE html>
<html>
<head>
	<title>Lesson 41</title>
</head>
<body>
	<div id="first" class="hey">
        Hey, I am the first div
    </div>

    <script src="script.js"></script>
</body>
</html>
*/

//1.To access the attributes of an element in JavaScript, we can use the getAttribute() method. For example:

let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a); // it will print "hey" 


//2.We can also check if an element has a specific attribute using the hasAttribute() method. For example:

console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false


//3.Now, to add or modify an attribute, we can use the setAttribute() method. For example:

first.setAttribute("hidden", "true"); // reload the page to see the changes, it will hide the div


//4.This will add a hidden attribute to the first element. We can also remove an attribute using the removeAttribute() method. For example:

first.removeAttribute("hidden"); // reload the page to see the changes, it will show the div because we removed the hidden attribute



//5.We can also modify an existing attribute using this method. For example:

first.setAttribute("class", "true forReal");
//This will change the "class" attribute value to "true forReal" You can use Inspect Element to see the changes.




//6.We can also remove an attribute using the removeAttribute() method. For example:

first.removeAttribute("class");

//his will remove the "class" attribute from the "first" div element.



//7. We can also get a list of all attributes of an element using the attributes property. For example:

console.log(first.attributes);

//This will log a NamedNodeMap object of all attributes of the "first" div element.



//8.In HTML5, we can also create custom attributes. However, 
//to avoid naming conflicts with future updates of HTML or JavaScript, it is recommended to prefix custom attributes with "data-". For example:

<div id="first" class="hey" data-game="mario" data-player="Harry">
    Hey, I am the first div
</div>



//9.To access custom attributes in JavaScript, we can use the dataset property. For example:

console.log(first.dataset);



//10.This will log a DOMStringMap object containing all the custom attributes of the "first" div element.
// We can also access a specific custom attribute using its name. For example:

console.log(first.dataset.game);

//This will log the value of the "game" custom attribute, which is "mario" in this case.