/**
 * 给定一个正整数，检查他是否为交替位二进制数：换句话说，就是他的二进制数相邻的两个位数永不相等。
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  n = n ^ (n >> 1)
  return (n & (n + 1)) === 0
};                      