/**
 * 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 0) return 0
  let ans = 1
  let flag = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      ++flag
      ans = Math.max(ans, flag)
    } else {
      flag = 1
    }
  }
  return ans
};
