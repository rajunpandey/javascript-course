//ex1
var name = "rajun";
console.log(name); //output: rajun

//ex2
var name = "rajun";
name = "Ram";
console.log(name); //output: Ram


//ex3
var name = "rajun";
{
    var name = "Ram";
    console.log(name); //output: Ram
}
console.log(name); //output: Ram