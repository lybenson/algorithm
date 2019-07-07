/**
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
      sum += nums[i]
  }
  let ans = sum / k
  for (let i = k; i < nums.length; i++) {
      sum -= nums[i-k]
      sum += nums[i]
      let average = sum / k
      ans = Math.max(average, ans)
  }
  return ans
};