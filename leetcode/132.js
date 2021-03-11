/**
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。

返回符合要求的 最少分割次数 。
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let dp = []
  let length = s.length
  let valid = new Array(length).fill(0).map(() => new Array(length).fill(true))

  for (let i = length - 1; i >= 0; --i) {
    for (let j = i + 1; j < length; ++j) {
      valid[i][j] = s[i] == s[j] && valid[i + 1][j - 1];
    }
  }
  for (let j = 0; j < length; j++) {
    if (valid[0][j]) {
      dp[j] = 0
      continue
    }
    dp[j] = dp[j - 1] + 1
    for (let i = 1; i < j; i++) {
      if (valid[i][j]) {
        dp[j] = Math.min(dp[j], dp[i - 1] + 1)
      }
    } 
  }
  return dp[length - 1]
};
