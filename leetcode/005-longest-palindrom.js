/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba"也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb
*/

/**
 * 暴力法
 */
var longestPalindrome1 = function(s) {
  if (!s) return ''
  if (s.lenth == 1) return s
  let maxSubString = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let sub = s.substring(i, j)
      
      // 判断sub是否为回文
      let mid = sub.length / 2
      let last = sub.length - 1
      let isPalindromic = true
      for (let k = 0; k < mid; k++) {
        if (sub[k] !== sub[last - k]) {
          isPalindromic = false
          break 
        }
      }

      if (isPalindromic) {
        maxSubString = (sub.length >= maxSubString.length) ? sub : maxSubString
      }
    }
  }
  return maxSubString
};

/**
 * 动态规范
 */
var longestPalindrome2 = function(s) {

};

/**
 * Manacher 算法
 */
var longestPalindrome3 = function(s) {

};