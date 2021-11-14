/**
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let cnt1 = new Array(26).fill(0)
  let cnt2 = new Array(26).fill(0)

  let m = s2.length
  let n = s1.length
  if (n > m) return false
  for (let i = 0; i < n; i++) {
    cnt1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    cnt2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  if (cnt1.toString() === cnt2.toString()) return true
  for (let i = n; i < m; i++) {
    cnt2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    cnt2[s2[i - n].charCodeAt(0) - 'a'.charCodeAt(0)]--
    if (cnt1.toString() === cnt2.toString()) return true
  }
  return false
};
console.log(checkInclusion('ab', 'eidbaooo'));