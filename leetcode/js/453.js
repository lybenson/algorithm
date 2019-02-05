/**
 * 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let min = Math.min(...nums)
  let ans = 0
  nums.forEach(num => {
    ans += num - min
  })
  return ans
};
