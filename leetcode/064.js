/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {

      } else if (i === 0) {
        grid[i][j] += grid[i][j - 1]
      } else if (j === 0) {
        grid[i][j] += grid[i-1][j]
      }else{
        grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1])
      }
    }
  }
  return grid[m-1][n-1]
}