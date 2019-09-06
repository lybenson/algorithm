/**
 * 编写一个程序，找出第 n 个丑数。

丑数就是只包含质因数 2, 3, 5 的正整数。
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let dp = []
  dp[0] = 1
  let pointer_2 = 0
  let pointer_3 = 0
  let pointer_5 = 0
  
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[pointer_2] * 2, dp[pointer_3] * 3, dp[pointer_5] * 5)
    if (dp[i] == dp[pointer_2] * 2) pointer_2++
    if (dp[i] == dp[pointer_3] * 3) pointer_3++
    if (dp[i] == dp[pointer_5] * 5) pointer_5++
  }
  return dp[n - 1]
};
