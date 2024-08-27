//Both parentNode and parentElement properties return the parent node of an element. 
//The only difference between them is that parentElement returns null if the parent node is not an element node, 
//while parentNode returns the parent node regardless of its node type.
/*
//For example, consider the following HTML code:

<div>
    <p>Some text</p>
</div>

//If we select the <p> element and use parentNode, it will return the <div> element, which is the direct parent of <p>

let p = document.querySelector('p');
console.log(p.parentNode); // returns <div> element

//However, if we use parentElement instead, it will also return the <div> element:

let p = document.querySelector('p');
console.log(p.parentElement); // returns <div> element

//In this case, both parentNode and parentElement return the same result, because the parent of is an element. 
//Now, let's consider another example:

<p>Some text</p>

//If we select the <p> element and use parentNode, it will return the <body> element, which is the direct parent of <p>:

let p = document.querySelector('p');
console.log(p.parentNode); // returns <body> element

//However, if we use parentElement instead, it will return null, because the parent of <p> is not an element, but the root node of the document:



let p = document.querySelector('p');
console.log(p.parentElement); // returns null

//In this case, parentNode returns the correct result, while parentElement returns null.
*/