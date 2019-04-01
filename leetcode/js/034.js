/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while(start <= end) {
    let mid = ~~((start + end) / 2)
    if (nums[mid] === target) {
      let i = mid
      while(i >= 0 && nums[i] === target) i--
      let j = mid
      while(j < nums.length && nums[j] === target) j++
      return [i + 1, j - 1]
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return [-1, -1]
};