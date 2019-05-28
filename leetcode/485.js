/**
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let ans = 0
  let size = 0
  for (let i = 0; i < nums.length; i++) {
    let v = nums[i]
    if (v === 1) {
      ++size
    } else {
      ans = Math.max(size, ans)
      size = 0
    }
  }
  return ans
};