/**
 * 有两种形状的瓷砖：一种是 2x1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。

XX  <- 多米诺

XX  <- "L" 托米诺
X
给定 N 的值，有多少种方法可以平铺 2 x N 的面板？返回值 mod 10^9 + 7。

（平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。）
 */
/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
  // three status
  // dp[i][0] way to cover i cols, both rows of col i are covered
  // dp[i][1] way to cover i cols, top rows of col i are covered
  // dp[i][2] way to cover i cols, bottom rows of col i are covered
  let dp = []
  dp[0] = []
  dp[1] = []
  dp[0][0] = dp[1][0] = 1
  dp[1][1] = 0

  let mod = 1000000007
  for (let i = 2; i <= N; i++) {
    dp[i] = []
    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + 2 * dp[i - 1][1]) % mod
    dp[i][1] = (dp[i - 2][0] + dp[i - 1][1]) % mod
  }
  return dp[N][0]
};
