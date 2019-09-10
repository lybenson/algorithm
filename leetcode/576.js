/**
 * 给定一个 m × n 的网格和一个球。球的起始坐标为 (i,j) ，你可以将球移到相邻的单元格内，或者往上、下、左、右四个方向上移动使球穿过网格边界。但是，你最多可以移动 N 次。找出可以将球移出边界的路径数量。答案可能非常大，返回 结果 mod 109 + 7 的值。
/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
  // 看成从边界出发 dp[i][j] 是指在特定的移动次数下，可达到 (i,j) 位置的方式数
  let mod = 1000000007

  let array_n = new Array(n).fill(1)
  let array_m = new Array(m).fill(array_n)
  let dp = new Array(N).fill(array_m)

  console.log(dp);
  
  for (let time = 1; time < N; t++) {
    for (let y = 1; y < m; y++) {
      for (let x = 0; x < n; n++) {
        dp[time][y][x] = dp[time - 1][y - 1][x] + dp[time - 1][y + 1][x] + dp[time - 1][y][x - 1] + dp[time - 1][y][x + 1]
      }
    }
  }
};