/**
给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length < k || !s) return 0
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
  }
  // 遍历map
  let splitChar = ''
  let totalLength = 0
  for (let [key, value] of map) {
    if (value < k) {
      splitChar = key
      break
    }
    totalLength += value
  }
  if (splitChar === '') {
    return totalLength
  }
  let splitIndex = s.indexOf(splitChar)
  let leftLength = longestSubstring(s.substring(0, splitIndex), k)
  let rightLength = longestSubstring(s.substring(splitIndex + 1, s.length), k)

  return Math.max(leftLength, rightLength)
};