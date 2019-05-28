/**
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。

现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let map = new Map()
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })
  let ans = 0

  let keys = [...map.keys()].sort((a, b) => a - b)
  for (let i = 1; i < keys.length; i++) {
    let diff = keys[i] - keys[i - 1]
    if (diff === 1) {
      ans = Math.max(map.get(keys[i]) + map.get(keys[i - 1]), ans)
    }
  }
  return ans
};