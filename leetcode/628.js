/**
给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let min1 = Number.MAX_VALUE
  let min2 = Number.MAX_VALUE
  let max1 = -Number.MAX_VALUE
  let max2 = -Number.MAX_VALUE
  let max3 = -Number.MAX_VALUE
  for (let i = 0; i < nums.length; i++) {
      let n = nums[i]
      if (n < min1) {
          min2 = min1
          min1 = n
      } else if (n < min2) {
          min2 = n
      }
      if (n > max3) {
          max1 = max2
          max2 = max3
          max3 = n
      } else if (n > max2) {
          max1 = max2
          max2 = n
      } else if (n > max1) {
          max1 = n
      }
  }
  return Math.max(min1 * min2 * max3, max1 * max2 * max3)
}
