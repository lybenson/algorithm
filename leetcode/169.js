/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1
  let ans = nums[0]
  for (let i = 1; i < nums.length; i++) {

    if(nums[i] === ans) {
      count++
    } else {
      count--
      if (count === 0) {
        ans = nums[i + 1]
      }
    }
  }
  return ans
};