/**
 * 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//  贪心算法实现
var triangleNumber = function(nums) {
  // 两边之和大于第三边
  nums.sort((a, b) => b - a)
  let len = nums.length
  let ans = 0
  for (let c = 0; c < len - 2; c++) {
    let b = c + 1
    let a = len - 1
    while (b < a) {
      if (nums[a] + nums[b] > nums[c]) {
        ans += (a - b)
        ++b
      } else {
        --a
      }
    }
  }
  return ans
}
