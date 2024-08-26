let num = [2,5,9,4,3,1]

 for(let i=0; i<num.length;i++){
   console.log(num[i])
 }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "rajun"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}