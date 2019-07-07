/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    let mid = ~~((start + end) / 2)
    if (nums[mid] === target) return nums[mid]
    if (nums[mid] < target) {
      start = mid + 1
    }
    if (nums[mid] > target) {
      end = mid - 1
    }
  }

  return -1
};