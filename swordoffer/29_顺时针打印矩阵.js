/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return matrix
  }
  // define border
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1

  let ans = []
  while (true) {
    // left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i])
    }
    if (++top > bottom) break

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right])
    }
    if (--right < left) break

    // right to left
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i])
    }
    if (--bottom < top) break

    // bottom to top
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left])
    }
    if (++left > right) break
  }

  return ans
};
