/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = nums.length

  // 以第i个元素结尾的最长递增子序列长度
  let dp = new Array(len).fill(1)

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max.apply(null, dp)
}
