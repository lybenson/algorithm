/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2)
    if (nums[mid] > target) {
      high = mid
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return low
};