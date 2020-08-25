/**
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 */
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let dp = []
  if (n < 2) {
    return 1
  }
  if (n === 2) return 1
  if (n === 3) return 2

  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3

  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= ~~(i / 2); j++) {
      dp[i] = Math.max(dp[i] || 0, dp[j] * dp[i - j])
    }
  }
  console.log(dp)
  return dp[n]
}

integerBreak(10)
