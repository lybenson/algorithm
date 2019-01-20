/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(num => nums2.includes(num)))]
};