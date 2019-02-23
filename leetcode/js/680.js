/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) {
      return isPalindrome(start + 1, end) || isPalindrome(start, end - 1)
    } else {
      ++start
      --end
    }
  }
  return true

  function isPalindrome (start, end) {
    while (start < end) {
      if (s[start] !== s[end]) return false
      ++start
      --end
    }
    return true
  }
};