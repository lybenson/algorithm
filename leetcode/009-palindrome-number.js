/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false

  let s = x.toString()
  let size = s.length / 2

  for (let i = 0; i < size; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
};
