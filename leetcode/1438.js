/**
给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

如果不存在满足条件的子数组，则返回 0 。
 */
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let maxQueue = []
  let minQueue = []
  let left = 0
  let right = 0
  let ans = 0
  
  let n = nums.length
  while (right < n) {
    while(maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
      maxQueue.pop()
    }
    while(minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
      minQueue.pop()
    }
    maxQueue.push(nums[right])
    minQueue.push(nums[right])

    while (maxQueue.length && minQueue.length && maxQueue[0] - minQueue[0] > limit) {
      if (nums[left] === minQueue[0]) minQueue.shift()
      if (nums[left] === maxQueue[0]) maxQueue.shift()
      left++
    }
    ans = Math.max(ans, right - left + 1)
    right++
  }
  return ans
}
