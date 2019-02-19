/**
 * 在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。

如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums.length) return nums
  let row = nums.length
  let col = nums[0].length
  if (row * col < r * c) return nums

  let ans = []
  for (let i = 0; i < r * c; i++) {
    let ele = nums[parseInt(i / col)][i % col]
    if (!ans[parseInt(i / c)]) {
      ans[parseInt(i / c)] = []
    }
    ans[parseInt(i / c)][i % c] = ele
  }
  return ans
};