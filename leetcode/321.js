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
  for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); ++i) {
    ans = max(ans, 0, maxNumberCombine(maxNumberSingle(nums1, i), 
    maxNumberSingle(nums2, k - i)), 0)
  }         
  return ans

  // 数组中取k个最大的元素
  function maxNumberSingle (nums, k) {
    let ans = []
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      while (j > 0 && nums[i] > ans[j - 1] && nums.length - i > k - j) {
        --j
      }
      if (j < k) {
        ans[j++] = nums[i]
      }
    }        
    return ans
  }

  // 组合两个数组，保证顺序且数最大
  function maxNumberCombine (nums1, nums2) {
    console.log(nums1);
    console.log(nums2);
    let ans = []
    let s1 = 0
    let s2 = 0
    let index = 0
    while (s1 !== nums1.length || s2 !== nums2.length) {
      ans[index++] = max(nums1, s1, nums2, s2) == nums1 ? nums1[s1++] : nums2[s2++]
    }
    return ans
  }

  // 比较两个数组的大小
  function max (nums1, s1, nums2, s2) {
    for (let i = s1; i < nums1.length; i++) {
      let j = s2 + i - s1
      if (j >= nums2.length) return nums1
      if (nums1[i] < nums2[j]) return nums2
      if (nums1[i] > nums2[j]) return nums1
    }
    return nums2
  }
}

console.log(maxNumber([6,7],
  [6,0,4],
  5));
