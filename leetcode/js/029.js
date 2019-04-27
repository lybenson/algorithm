/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let res = 0
  for (let i = 31; i >=0; i--) {
    res = res << 1
    if (dividend >>> i >= divisor) {
      res += 1
      dividend -= divisor<<i
    }
  }
  if (res < 0) {
    return sign > 0 ? -res-1 : -(-res)
  }
  return sign > 0 ? res : -res
};
