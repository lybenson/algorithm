/**
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let length = nums.length
  let ans = new Array(length).fill(-1)
  let stack = []

  for (let i = 0; i < length * 2 - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % length]) {
      ans[stack[stack.length - 1]] = nums[i % length]
      stack.pop()
    }
    stack.push(i % length)
  }
  return ans
};
