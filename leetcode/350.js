/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let ans = []
  for (let i = 0; i < nums1.length; i++) {
    nums2.includes(nums1[i]) && ans.push(...nums2.splice(nums2.indexOf(nums1[i]), 1))
  }
  return ans
};