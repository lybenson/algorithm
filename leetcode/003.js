/*
给定一个字符串，找出不含有重复字符的最长子串的长度。

示例：

给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
 */

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let size = 0 // 用于存放当前最长无重复子串的长度
//     let str = '' // 用于存放无重复子串
//     const len = s.length;
//     for(let i = 0; i < len; i++) {
//       let char = s.charAt(i)
//       let index = str.indexOf(char)
//       if(index === -1) {
//         str += char
//         size = size < str.length ? str.length : size
//       } else {
//         str = str.substr(index + 1) + char
//       }
//     }
//     return size
// };

var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let n = s.length
  let start = 0
  let ans = 0
  for (let end = 0; end < n; end++) {
    let char = s[end]
    if (map.has(char)) {
      start = Math.max(map.get(char) + 1, start)
    }
    ans = Math.max(ans, end - start + 1)
    map.set(char, end)
  }
  return ans
};
