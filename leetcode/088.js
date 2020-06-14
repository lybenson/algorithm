/**
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = (m + n) - 1
  while (p2 >= 0) {
    if (p1 < 0) {
      nums1[p--] = nums2[p2--]
      continue
    }
    nums1[p--] = nums1[p1] >= nums2[p2] ? nums1[p1--]: nums2[p2--]
  }
}

merge([1,2,3,0,0,0], 3, [2,5,6], 3)