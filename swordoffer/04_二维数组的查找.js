/**
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let m = matrix.length
  let n = matrix[0].length

  let row = 0
  let col = n - 1

  while (row < m && col >= 0) {
    let num = matrix[row][col]
    if (num === target) return true
    else if (num > target) col--
    else row++
  }
  return false
};
