/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 */
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = new Map()
  for (let char of s) {
    map.set(char, !map.has(char))
  }
  for (let char of s) {
    if (map.has(char) && map.get(char) === true) return char
  }
  return ' '
};
