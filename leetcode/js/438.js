/**
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (p.length > s.length) return []

  let ans = []

  let start = 0
  let end = p.length

  let len = s.length - p.length + 1
  for (let i = 0; i < len; i++) {
    let str = s.splice(start, end)
    
  }
};