/**
 * 统计一个数字在排序数组中出现的次数。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] !== target) {
      left++
    }
    if (nums[right] !== target) {
      right --
    }
  }
  return right - left
};
