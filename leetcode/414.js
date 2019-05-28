/**
给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = [...new Set(nums.sort((a, b) => b - a))]
  if (nums.length < 3) return nums[0]
  return nums[2]
};
