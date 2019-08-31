/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let len = triangle.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === 0 && j === 0) continue
      if (j === 0) triangle[i][j] += triangle[i - 1][j]
      else if (j === i) triangle[i][j] += triangle[i - 1][j - 1]
      else triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j -1])
    }
  }
  return Math.min.apply(Math, triangle[len - 1])
};

