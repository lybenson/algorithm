/**
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。


 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let ans = 0
  let t = x^y
  console.log(t)
  while(t > 0) {
    ans += t & 1
    t>>=1
  }
  return ans
};
