/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

注意数组中可能存在重复的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  return getMin(0, nums.length - 1)
  function getMin (left, right) {
    if (left + 1 >= right) {
      return Math.min(nums[left], nums[right])
    }
    if (nums[left] < nums[right]) {
      return nums[left]
    }
    let mid = left + ~~((right - left) / 2)
    return Math.min(getMin(left, mid - 1), getMin(mid, right))
  }
};