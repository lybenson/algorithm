/**
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (!s) return -1
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (s.lastIndexOf(c) === s.indexOf(c)) {
      return i
    }
  }
  return -1
};