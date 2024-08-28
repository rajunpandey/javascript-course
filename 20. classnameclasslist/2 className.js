//We can use the className property to change the class of an element. let's try it out:

first.className = "red text-dark";


//If we reload the page, we will see that both classed i.e red and text-dark are applied to the element.
// But what if we want to add a class to the element without removing the previous ones? We can do that by using the += operator:



first.className += " yellow"; // it doesnt make sense with our example but it will add the class yellow to the element
