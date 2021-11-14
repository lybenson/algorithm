/**
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = []
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // if (dp[i - 1] + nums[i] < dp[i - 1]) {
    //   dp[i] = nums[i]
    // } else {
    //   dp[i] = dp[i - 1] + nums[i]
    // }
    if (dp[i - 1] <= 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = dp[i - 1] + nums[i]
    }
  }
  console.log(dp)
  return Math.max(...dp)

};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
