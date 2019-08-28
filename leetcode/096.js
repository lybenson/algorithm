/**
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (n < 1) return 0
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = 0
    for (let j = 0; j < i; j++) {
      dp[i] += (dp[i - j - 1] * dp[j])
    }
  }
  return dp[n]
}
