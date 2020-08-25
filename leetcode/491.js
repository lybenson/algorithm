/**
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let ans = []
  let set = new Set()
  let length = nums.length
  dfs(0, [])

  return ans

  function dfs(start, path) {
    if (path.length >= 2) {
      const str = path.join(',')
      if (!set.has(str)) {
        ans.push(path.slice())
        set.add(str)
      }
    }

    for (let i = start; i < length; i++) {
      const prev = path[path.length - 1]
      let current = nums[i]
      if (path.length === 0 || prev <= current) {
        path.push(current)
        dfs(i + 1, path)
        path.pop()
      }
    }
  }
}
