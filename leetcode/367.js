/**
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // 完全平方数是前n个连续奇数的和
  if (num === 1) return true
  let sum = 1
  let n = 1
  while (sum < num) {
    sum = n + n*(n-1)
    ++n
    if (sum === num) return true
  }
  return false
};