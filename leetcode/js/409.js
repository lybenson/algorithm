/**
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let hash = {}

  for (let item of s)
    hash[item] = ~~hash[item] + 1

  let exsitsOld = false
  let ans = 0

  for (let key in hash) {
    let cnt = hash[key]
    ans += cnt & 1 ? cnt - 1 : cnt;
    (cnt & 1) && (exsitsOld = true)
  }

  return ans + exsitsOld
}
longestPalindrome('abccccdd')
// dddccccddd
