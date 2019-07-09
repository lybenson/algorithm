/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

示例 1:

nums1 = [1, 3]
nums2 = [2]

中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

中位数是 (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length
  let n2 = nums2.length
  if (n1 > n2) {
    return findMedianSortedArrays(nums2, nums1)
  }
  let middle = parseInt((n1 + n2 + 1) / 2)
  
  let left = 0
  let right = n1
  while (left < right) {
    let m1 = parseInt(left + (right - left) / 2)
    let m2 = middle - m1
    if (nums1[m1] < nums2[m2 - 1])
      left = m1 + 1
    else
      right = m1
  }
  let m1 = left
  let m2 = middle - left

  let  med1= Math.max(m1 <= 0 ? -Number.MAX_VALUE : nums1[m1 - 1], m2 <= 0 ? -Number.MAX_VALUE : nums2[m2 - 1])

  if ((n1 + n2) % 2 === 1) {
    return med1
  }
  let med2 = Math.min(m1 >= n1 ? Number.MAX_VALUE : nums1[m1], m2 >= n2 ? Number.MAX_VALUE : nums2[m2])
  return (med1 + med2) * 0.5;
};

