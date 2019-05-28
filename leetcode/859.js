/**
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false
  let diffCount = 0
  let diffA = []
  let diffB = []
  for (let i = 0; i < A.length; i++) {
    const char1 = A[i]
    const char2 = B[i]
    if (char1 === char2) continue
    diffCount++
    if (diffCount > 2) return false
    diffA.push(char1)
    diffB.push(char2)
  }
  if (diffCount === 1) return false
  if (diffCount === 0) {
    let map = {}
    for (let i = 0; i < A.length; i++) {
      const char = A[i]
      if (map[char]) return true
      else map[char] = true
    }
    return false
  }
  if (diffA[0] === diffB[1] && diffA[1] === diffB[0]) return true
  return false
};
