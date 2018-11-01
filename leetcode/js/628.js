/**
给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => b - a)
  let len = nums.length
  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[len - 1] * nums[len - 2])
};
