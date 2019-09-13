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
  // 通常是3维DP，降低复杂度可以使用记忆化DP, 记录上一步的的DP结果
  // 看成从边界出发 dp[i][j] 是指在特定的移动次数下，可达到 (i,j) 位置的方式数
  let mod = 1000000007

  let array_n = new Array(n).fill(0)
  let dp = new Array(m).fill(array_n)

  for (let time = 1; time <= N; time++) {
    let array_n = new Array(n).fill(0)
    let array_m = new Array(m).fill(array_n)
    for (let y = 0; y < m; y++) {
      for (let x = 0; x < n; x++) {
        if (x === 0) array_m[y][x] += 1
        if (y === 0) array_m[y][x] += 1
        if (x === n - 1) array_m[y][x] += 1
        if (y === m - 1) array_m[y][x] += 1

        array_m[y][x] = dp[y][x + 1] + dp[y][x - 1] + dp[y + 1][x] + dp[y - 1][x]
        // if (x === 0 || y === 0 || x === n - 1 || y === m - 1) {
        //   array_m[y][x] += 1
        // }
        // if (y + 1 < m) {
        //   array_m[y][x] += dp[y + 1][x]
        // }
        // if (y - 1 >= 0) {
        //   array_m[y][x] += dp[y - 1][x]
        // }
        // if (x + 1 < n) {
        //   array_m[y][x] += dp[y][x + 1]
        // }
        // if (x - 1 >= 0) {
        //   array_m[y][x] += dp[y][x - 1]
        // }
      }
    }
    console.log(array_m)
    dp = [...array_m]
  }
  return dp[i][j]
}

console.log(findPaths(2, 2, 2, 0, 0));
