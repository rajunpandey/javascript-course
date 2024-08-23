/*
//syntax
if (condition1) {
    // Code block 1
    if (condition2) {
        // Code block 2
    } else {
        // Code block 3
    }
} else {
  
  // Code block 4
}
*/

//example
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
};
