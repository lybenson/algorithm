/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  let map = new Map()
  nums.forEach(num => {
    if (map.has(num)) return

    let left_v = map.get(num - 1) || 0
    let right_v = map.get(num + 1) || 0

    if (left_v > 0 && right_v > 0) {
      map.set(num, left_v + right_v + 1)
      map.set(num - left_v, left_v + right_v + 1)
      map.set(num + right_v, left_v + right_v + 1)
    } else if (left_v > 0) {
      map.set(num, left_v + 1)
      map.set(num - left_v, left_v + 1)
    } else if (right_v > 0) {
      map.set(num, right_v + 1)
      map.set(num + right_v, right_v + 1)
    } else {
      map.set(num, 1)
    }
  })

  console.log(map)

  let ans = 0
  for (let key of map.keys()) {
    ans = Math.max(ans, map.get(key))
  }
  return ans
}

var longestConsecutive2 = function(nums) {

};

console.log(longestConsecutive([100,4,200,1,3,2]))
