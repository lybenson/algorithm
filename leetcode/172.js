/**
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  return n < 5 ? 0 : ~~(n / 5) + trailingZeroes(~~(n / 5))
};