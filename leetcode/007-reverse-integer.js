/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let lessThanZero = false
  if(x < 0) {
    lessThanZero = true 
  }
  let num = Math.abs(x)
  num = num.toString().split('').reverse().join('')
  
  num = parseInt(num)
  if (lessThanZero) num = -num
  
  if (num < Math.pow(-2, 31) || num > (Math.pow(2, 31) - 1)) return 0
  
  return num
};