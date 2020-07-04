// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length

  let dp = new Array(m).fill(new Array(n).fill(0))
  console.log(dp)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = matrix[i][j]
      if (dp[i][j] === 0) continue
      if (i ===0 && j === 0) {

      } else if (i === 0) {

      } else if (j === 0) {

      } else {
        
      }
    }
  }
  console.log(dp)
  return dp[m - 1][n - 1]
};
