/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
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
