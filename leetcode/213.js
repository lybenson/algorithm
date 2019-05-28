/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// from 0: 0 ~ nums.length-1
// not from 0: 1 ~ nums.length
var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let len = nums.length
  return Math.max(robBack(nums.slice(0, len - 1)), robBack(nums.slice(1, len)))
  
  function robBack (nums_slice) {
    let size = nums_slice.length
    let dp = new Array(size).fill(0)
    for (let i = 0; i < size; i++) {
      dp[i] = Math.max((i > 1 ? dp[i - 2] : 0) + nums_slice[i], (i > 0 ? dp[i - 1]: 0))
    }
    return dp[dp.length - 1]
  }
}
