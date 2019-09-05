/**
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = i
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
};
