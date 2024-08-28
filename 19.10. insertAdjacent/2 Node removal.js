//The remove method removes the element from the DOM. The following code shows how to use the remove method:

let a = document.getElementById('first');
a.remove();
/*
//here is the result:

<html>
<head>
    <title>Lesson 44</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
*/
//If you open inspect element and reload the page, you will see that first div appeas for a second and then suddenly disappears as the js is executed.