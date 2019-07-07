/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(num)) {
      let j = map.get(num)

      if (i - j <= k) {
        return true
      } else {
        map.set(num, i)
      }
    } else {
      map.set(num, i)
    }
  }
  return false
};
