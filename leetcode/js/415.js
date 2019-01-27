/**
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length

  let ans = ''
  let carry = 0
  while (len1 > 0 || len2 > 0) {
    let sum = (+num1[--len1] || 0) + (+num2[--len2] || 0) + carry
    ans = (sum % 10) + '' + ans
    carry = Math.floor(sum / 10)
  }
  if (carry) ans = '1' + ans
  return ans
};