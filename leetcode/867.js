/**
给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  
  let ans = new Array(n)
  for (let i = 0; i < m; i++) {
    ans.push([])
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      ans[j][i] = matrix[i][j]
    }
  }
  return ans
};
