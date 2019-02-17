/**
 * 给定两个字符串，你需要从这两个字符串中找出最长的特殊序列。最长特殊序列定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。

子序列可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。

输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a.length < b.length) {
    [a, b] = [b, a]
  }

  let ans = 0

  let len = a.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i <= ans) continue
      let str = a.slice(i, j)
      if (!b.includes(str)) {
        ans = Math.max(ans, str.length)
      }
    }
  }
  return ans
};