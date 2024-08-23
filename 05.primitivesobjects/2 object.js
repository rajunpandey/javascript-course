//Other than the 7 primitive data types, the non-primitive data type in JavaScript is the object. Objects are key-value pairs, used to map keys to values. We can create an object like this:
const bioData = {
	name: "rajun",
	age: 29,
	likesJS: true,
	secret: undefined,
};

//We can access an object's values in two ways: by using square brackets [] or by using dot notation . For example:
console.log(bioData["name"]); // Output: rajun
console.log(bioData.age); // Output: 29
console.log(bioData["pet"]); // Output: undefined

//Note: see how ["pet"] says undefined, this is because the key "pet" doesn't exist in the object bioData. 