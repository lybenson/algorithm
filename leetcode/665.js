/**
 * 给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length <= 2) return true
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++
      if (count > 1) {
        return false
      }
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i]
      } else {
        nums[i] = nums[i - 1]
      }
    }
  }
  return true 
};