/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLocaleLowerCase()

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isValid(s[left])) {
      left++
      continue
    }

    if (!isValid(s[right])) {
      right--
      continue
    }
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      break
    }
  }

  return right <= left
};

function isValid (char) {
  let charCode = char.charCodeAt(0)
  let isDigit = charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0)
  let isChar = charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)

  return isDigit || isChar
}
