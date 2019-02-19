/**
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let start = 0
  let end = nums.length - 1
  let another = [...nums]
  nums = nums.sort((a, b) => a - b)
  
  while (start < end) {
    if (nums[start] === another[start]) start++
    else if (nums[end] === another[end]) end--
    else break
  }

  return start === end ? 0 : end - start + 1
};