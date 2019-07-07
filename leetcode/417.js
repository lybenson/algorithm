/**
 * 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (!matrix) return []

  let m = matrix[0].length
  let n = matrix.length

  let p = (new Array(n)).fill((new Array(m)))
  let a = (new Array(n)).fill((new Array(m)))
  
  for (let x = 0; x < m; ++x) {
    dfs(x, 0, 0, p)  // top
    dfs(x, n - 1, 0, a) // bottom
  }
  
  for (let y = 0; y < n; ++y) {
    dfs( 0, y, 0, p)  // left
    dfs(m - 1, y, 0, a) // right
  } 
  let ans = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if(p[i][j] && a[i][j]) {
        ans.push([i, j])
      }
    }
  }
  return ans

  function dfs (x, y, h, v) {
    if (x < 0 || y < 0 || x == matrix[0].length || y == matrix.length) return
    if (v[y][x] || matrix[y][x] < h) return
    v[y][x] = true
    dfs(x + 1, y, matrix[y][x], v)
    dfs(x - 1, y, matrix[y][x], v)
    dfs(x, y + 1, matrix[y][x], v)
    dfs(x, y - 1, matrix[y][x], v)
  }
};
