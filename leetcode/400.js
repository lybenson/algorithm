/**
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n < 10) return n
  let digit = 1
  while (n > digit * 9 * 10 ** (digit - 1)) {
    n -= digit * 9 * 10 ** (digit - 1)
    digit += 1
  }
  let a = parseInt((n - 1) / digit)
  let b = parseInt((n - 1) % digit)
  let num = 10 ** (digit - 1) + a
  return parseInt(String(num)[b])
};

console.log(findNthDigit(187))
