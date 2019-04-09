/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) return false
  let start = 0
  let end = matrix.length - 1
  let rowLength = matrix[0].length - 1

  while (start + 1 < end) {
    let mid = ~~((start + end) / 2)
    if (matrix[mid][rowLength] < target) {
      start = mid
    } else {
      end = mid
    }
  }
  let row = -1
  if (matrix[start][rowLength] >= target) {
    row = start
  } else if (matrix[end][rowLength] >= target) {
    row = end
  } else {
    return false
  }
  start = 0
  end = rowLength
  while (start + 1 < end) {
    let mid = ~~((start + end) / 2)
    if (matrix[row][mid] === target) {
      return true
    }
    if (matrix[row][mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }
  if (matrix[row][start] === target || matrix[row][end] === target) return true
  return false
};
