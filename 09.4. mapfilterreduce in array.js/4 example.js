
//1. Array map method
let arr = [10, 25, 35]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
  })
   console.log(arr)

   
/*
//2.Array filter method
let arr2 = [4, 2, 10, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
 console.log(a2, arr2)

*/



/*
//3. Array reduce method
let arr3 = [1, 2, 3, 8, 7, 6]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)
*/