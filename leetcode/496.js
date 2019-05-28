/**
 * 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let hash = {}
  let stack = []
  let i = 0
  while (i < nums2.length) {
    const n = nums2[i]
    if (stack.length === 0 || n < stack[stack.length - 1]) {
      stack.push(n)
      i += 1
    } else {
      hash[stack.pop()] = n
    }
  }
  return nums1.map(x => (hash[x] ? hash[x] : -1))
}
