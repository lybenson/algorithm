/**
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  if (c === 0) return true
  let start = 0
  let end = ~~Math.sqrt(c)
  while (start <= end) {
    total = start * start + end * end
    if (total > c) end -= 1
    else if (total < c) start += 1
    else return true
  }
  return false
};