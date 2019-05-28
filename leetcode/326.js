/**
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (n > 1) {
    n /= 3
  }
  return n === 1
};