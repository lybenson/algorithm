/**
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  if (!nums || nums.length === 0) return 0
  let ans = 0
  let sum = 0
  let map = new Map()
  map.set(0, 1)
  for (const num of nums) {
    sum += num
    ans += (map.get(sum - k) || 0)
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
  } 
  return ans
}
