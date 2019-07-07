/**
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let ans = nums.length
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    ans = ans ^ num
    ans = ans ^ i
  }
  return ans
};
