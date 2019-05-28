/**
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 */

 /**
 * @param {string} S
 * @return {string[]}
 */
// DFS
// A-Z: 65-90
// a-z: 97-112
// a - A = 32
var letterCasePermutation = function(S) {
  S = S.split('')
  let ans = []

  dfs(S, 0)

  return ans

  function dfs(S, i) {
    if (i == S.length) {
      S = S.join('')
      ans.push(S)
      return
    }
    dfs(S, i+1)
    if (!isNaN(S[i])) return
    S[i] = String.fromCharCode(S[i].charCodeAt() ^ (1 << 5))
    dfs(S, i + 1)
    S[i] = String.fromCharCode(S[i].charCodeAt() ^ (1 << 5))
  }
};
