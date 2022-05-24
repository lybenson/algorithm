/**
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let start = 0
  let end = nums.length - 1

  while(start < end) {
    while (start < end && nums[start] & 1 === 1) i += 1
    while (start < end && nums[end] & 1 === 0) end -= 1

    [nums[start], nums[end]] = [nums[end], nums[start]]
  }
  return nums
};
