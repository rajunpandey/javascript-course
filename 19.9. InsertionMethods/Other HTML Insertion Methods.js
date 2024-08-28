/*
//<html>
<head>
	<title>Lesson 43</title>
</head>
<body>
I am outside div (start)
<div class="container">
	I am start of this container
        <div id="first">I am first element</div>
	I am  end of this container
</div>
I am outside div(end)
    <script src="script.js"></script>
</body>
</html>
*/


//1.a.append(div): 
                 //This will append the div element as the last child of the a element. 
                // In our case, it will add the div element as a child of the first div.


//2.a.prepend(div): 
                //This will add the div element as the first child of the a element.
                // In our case, it will add the div element as the first child of the first div.


//3.a.before(div): 
           //This will add the div element before the a element. 
           //In our case, it will add the div element before the first div.
//4.a.after(div):
          // This will add the div element after the a element.
           // In our case, it will add the div element after the first div.
//5.a.replaceWith(div):
          // This will replace the a element with the div element.
           // In our case, it will replace the first div with the div element.


//All of these methods can be used to modify the HTML content dynamically using JavaScript.
// Here is the complete code, comment out the code you don't want to run and test the results:

// Using innerHTML
let a = document.getElementsByTagName('div')[0];
a.innerHTML = '<h1>Hello World</h1>';

// Using createElement and appendChild
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (append)</h1>';
a.appendChild(div);

// Using prepend
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (prepend)</h1>';
a.prepend(div);

// Using before
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (before)</h1>';
a.before(div);

// Using after
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (aftwe)</h1>';
a.after(div);

// Using replaceWith
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (replaced)</h1>';
a.replaceWith(div);