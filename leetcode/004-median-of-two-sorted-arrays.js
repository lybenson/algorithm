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
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a, b) => a - b)
    let res
    if (nums.length % 2 == 0) {
      res = (nums[parseInt((nums.length - 1) / 2)] + nums[parseInt((nums.length - 1) / 2 + 1)]) / 2
    } else {
      res = nums[parseInt(nums.length / 2)]
    }
    return res
};
let s = findMedianSortedArrays([1, 3], [2])

console.log(s)
