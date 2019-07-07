/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[\W]/g, '')
  s = s.toLowerCase()
  let newS = s.split('').reverse().join('')
  return s === newS
};