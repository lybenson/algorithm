/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('').reverse()
  b = b.split('').reverse()

  let carry = 0
  let len = Math.max(a.length, b.length)

  let ans = []
  for (let i = 0; i < len; i++) {
    let sum = Number(a[i] | 0) + Number(b[i] | 0) + carry
    ans[i] = sum & 1
    if (sum >=2) carry = 1
    else carry = 0
  }
  if (carry === 1) ans[len] = 1

  return String(ans.reverse().join(''))
};