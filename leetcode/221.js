// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // 该方式创建的二维数组其内部每个数组元素的地址相同
  // let dp = new Array(m + 1).fill(new Array(n + 1))

  if (!matrix || matrix.length === 0) return 0
  let m = matrix.length
  let n = matrix[0].length

  let dp = []
  for (let i = 0; i <= m; i++) {
    let arr = new Array()
    for (let j = 0; j <= n; j++) {
      arr.push(0)
    }
    dp.push(arr)
  }

  let max = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(
          dp[i - 1][j -1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max * max
};

let res = maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
