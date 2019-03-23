/**
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (grid.length === 0) return 0
  let m = grid.length
  let n = grid[0].length

  let ans = 0
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        ans = Math.max(dfs(x, y), ans)
      }
    }
  }
  return ans

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= m || grid[y][x] === 0) return 0
    grid[y][x] = 0
    return dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1) + 1
  }
};
