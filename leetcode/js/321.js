/**
给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。

求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。

说明: 请尽可能地优化你算法的时间和空间复杂度。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let ans = []
  let len1 = nums1.length
  let len2 = nums2.length
  for (let k1 = 0; k1 < k; k1++) {
    let k2 = k - k1
    if (k1 > n1 || k2 > n2) continue
    ans = Math.max(maxNumberSingle(nums1, k1), maxNumberSingle(nums2, k2))
  }
  return ans

  // 数组中取k个最大的元素
  function maxNumberSingle (nums, k) {
    let ans = []
    return ans
  }

  // 组合两个数组，保证顺序且数最大
  function maxNumberCombine (nums1, nums2) {
    let ans = []
    return ans
  }
}
