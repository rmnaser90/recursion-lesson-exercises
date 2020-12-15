/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num, currentTotal) {
  currentTotal = currentTotal || 1
  currentTotal *= num
  num--
  if (num == 0) { return currentTotal }
  return findFactorial(num, currentTotal)

}

//Exercise 2
const reverseString = function (str, reverseStr) {
  reverseStr = reverseStr || ""
  if (str.length == 0) {
    return reverseStr
  }
  const arr = str.split('')
  reverseStr += arr.splice(arr.length - 1, 1)
  return reverseString(arr.join(''), reverseStr)
}


//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []
const swap = function (arr1,arr2) {
  //Your code here
 if (arr1.length == 0) {
   return
 }
 arr2.push(arr1.splice(0,1)[0])

swap(arr1,arr2)
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }



