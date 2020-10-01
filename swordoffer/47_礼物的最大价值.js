/**
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  let n = grid.length
  let m = grid[0].length

  let dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0)
  }
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if(x === 0 && y === 0) {
        dp[x][y] = grid[x][y]
      } else if (x === 0) {
        dp[x][y] = dp[x][y - 1] + grid[x][y]
      } else if (y === 0) {
        dp[x][y] = dp[x - 1][y] + grid[x][y]
      } else {
        dp[x][y] = Math.max(dp[x - 1][y], dp[x][y - 1]) + grid[x][y]
      }
    }
  }
  return dp[n - 1][ m -1]
};
