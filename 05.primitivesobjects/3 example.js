let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "rajun"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "rajun": true,
  "ram": false,
  "shyam": 67,
  "Rohan": undefined
}
console.log(item["ram"])