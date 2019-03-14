/**
 * 给定一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let arr = new Array(10001).fill(0)
  for (let i = 0; i < nums.length; i++) {
    ++arr[nums[i]]
  }
  let dp = new Array(arr.length + 1).fill(0)
  dp[1] = arr[1] * 1
  for (let i = 2; i < 10000; i++) {
    dp[i] = Math.max(dp[i-1],dp[i-2]+arr[i]*i)
  }
  return dp[10000]
};