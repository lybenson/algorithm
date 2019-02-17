/**
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return '0'
  let ans = ''
  let absNum = Math.abs(num)
  while (absNum > 0) {
    ans = absNum % 7 + ans
    absNum = ~~( absNum / 7)
  }
  if (num < 0) {
    ans = '-' + ans
  }
  return ans
};
