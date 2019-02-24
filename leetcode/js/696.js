/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let len = s.length

  let pre = s[0]
  let cnt = 1

  let arr = []
  for (let i = 1; i < len; i++) {
    if (s[i] === pre) {
      cnt++
    } else {
      arr.push(cnt)
      cnt = 1
      pre = s[i]
    }
  }
  arr.push(cnt)
  let ans = 0
  for (let i = 1; i < arr.length; i++) {
    ans += Math.min(arr[i], arr[i - 1])
  }
  return ans
};