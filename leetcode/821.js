/**
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let len = S.length
  let ans = new Array(len).fill(0)

  let position = []
  for (let i = 0; i < len; i++) {
    const char = S[i]
    if (char === C) {
      position.push(i)
    }
  }
  for (let i = 0; i < len; i++) {
    let char = S[i]
    if (char !== C) {
      let minDistance = Math.abs(position[0] - i)
      ans[i] = minDistance
      for (let j = 1; j < position.length; j++) {
        const distance = Math.abs(position[j] - i)
        if (distance < minDistance) {
          minDistance = distance
          ans[i] = minDistance
        }
      }
    }
  }
  return ans
};