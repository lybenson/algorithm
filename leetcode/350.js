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
  let numsMap = new Map()
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i]
    numsMap.has(num) ? numsMap.set(num, numsMap.get(num) + 1) : numsMap.set(num, 1)
  }
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    if (numsMap.has(num) && numsMap.get(num) > 0) {
      ans.push(num)

      numsMap.set(num, numsMap.get(num) - 1)
    }
  }
  return ans
};