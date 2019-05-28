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
 * 动态规划
 */
var longestPalindrome2 = function(s) {
  if (!s) return ''
  let longest = s[0]
  let expandAroundCenter = function (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return s.slice(left + 1, right)
  }
  for (let i = 0; i < s.length; i++) {
    // 奇数
    let odd = expandAroundCenter(i, i)
    if (odd.length > longest.length) longest = odd
    // 偶数
    let even = expandAroundCenter(i, i + 1)
    if (longest.length < even.length) longest = even
  }
  return longest
}

/**
 * Manacher 算法
 */
var longestPalindrome3 = function(s) {
  s = '^#' + s.split('').join('#') + '#$'
  let radius = new Array(s.length).fill(0)
  let C = 0, centerIndex = 0, maxRight = 0, maxLen = 0

  for (let i = 1; i < s.length - 1; i++) {
    // 计算初始回文半径, i' = 2 * C - i
    radius[i] = (maxRight > i) ? Math.min(maxRight - i, radius[2 * C - i]) : 0
    // 扩展半径
    while (s[i + 1 + radius[i]] && s[i - 1 - radius[i]] && s[i + 1 + radius[i]] === s[i - 1 - radius[i]]) radius[i]++
    // 更新当前搜索的最大右边界和位置
    if (i + radius[i] > maxRight) {
      C = i
      maxRight = i + radius[i]
    }
    // 更新最大回文串长度及位置
    if (maxLen < radius[i]) {
      maxLen = radius[i]
      centerIndex = i
    }
  }

  return s.slice((centerIndex - maxLen), (centerIndex + maxLen + 1)).split('#').join('')
};