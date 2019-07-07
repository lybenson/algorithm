/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let len = s.length

  let curr = ''
  let ans = ''
  for (let i = 0; i < len; i++) {
    let char = s[i]
    if (char === ' ' || i === (len - 1)) {
      if (i === len - 1) curr += char

      ans += reverse(curr) + (i === len - 1 ? '': ' ')
      curr = ''
    } else {
      curr += char
    }
  }

  function reverse (s) {
    let start = 0
    let end = s.length - 1
    s = s.split('')
    while (start < end) {
      let temp = s[start]
      s[start] = s[end]
      s[end] = temp
      start++
      end--
    }
    return s.join('')
  }
  return ans
};