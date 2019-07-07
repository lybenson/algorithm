/**
 * 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0
  let ans = 0
  
  let map = new Map()
  nums.forEach(num => {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  })

  for (const key of map.keys()) {
    if (k === 0) {
      if (map.get(key) > 1) ans++
    } else {
      let sum = key + k
      if (map.has(sum)) ans++
    }
  }
  return ans
};