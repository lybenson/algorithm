/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length -1
  while (start <= end) {
    let mid = parseInt((end + start) / 2)
    if (nums[mid] === target ) return true
    if (nums[start] === nums[mid]) {
      start++
    } else if (nums[start] < nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) end = mid - 1
      else start = mid + 1
    } else {
      if (target <= nums[end] && target > nums[mid]) start = mid + 1
      else end = mid -1
    }
  }
  return false
};
1