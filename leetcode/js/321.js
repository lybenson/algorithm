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
  for (let k1 = 0; k1 <= k; k1++) {
    let k2 = k - k1
    if (k1 > len1 || k2 > len2) continue
    ans = max(ans, maxNumberCombine(
      maxNumberSingle(nums1, k1),
      maxNumberSingle(nums2, k2)
    ))
  }
  return ans.filter(x => x !== undefined)

  // 数组中取k个最大的元素
  function maxNumberSingle (nums, k) {
    let ans = []
    if (k == 0) return ans
    let pop_num = nums.length - k
    nums.forEach((num, i) => {
      while (ans.length > 0 && num > ans[ans.length - 1] && pop_num--> 0) {
        ans.pop()
      }
      ans.push(num)
    })
    return ans.slice(0, k)
  }

  // 组合两个数组，保证顺序且数最大
  function maxNumberCombine (nums1, nums2) {
    console.log(nums1);
    console.log(nums2);
    let ans = []
    while (nums1.length > 0 || nums2.length > 0) {
      if (nums1.length == 0 || nums2.length == 0) {
        if (nums1.length == 0) {
          ans.push(nums2[0])
          nums2.shift()
        }
        if (nums2.length == 0) {
          ans.push(nums1[0])
          nums1.shift()
        }
      } else {
      if (nums1[0] > nums2[0]) {
          ans.push(nums1[0])
          nums1.shift()
        } else if (nums1[0] < nums2[0]) {
          ans.push(nums2[0])
          nums2.shift()
        } else {
          // 相同，比较后一个元素
          if (nums1[1] > nums2[1]) {
            ans.push(nums1[0])
            nums1.shift()
          } else {
            ans.push(nums2[0])
            nums2.shift()
          }
        }     
      }
    }
    return ans
  }

  // 比较两个数组的大小
  function max (nums1, nums2) {
    if (nums1.length == 0) return nums2
    if (nums2.length == 0) return nums1
    let max_nums = Math.max(Number(nums1.join('')), Number(nums2.join('')))
    return String(max_nums).split('').map(n => parseInt(n))
  }
}

console.log(maxNumber([6,7],
  [6,0,4],
  5));
