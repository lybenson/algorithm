/**
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ans = []
  function dfs (n, start, cur) {
    if (n == cur.length) {
      let subset = cur.concat() // deep copy
      ans.push(subset)
      return
    }
    for (let i = start; i < nums.length; ++i) {
      cur.push(nums[i])
      dfs(n, i + 1, cur)
      cur.pop()
    }
  }
  nums.forEach((num, i) => {
    dfs(i, 0, [])
  })
  ans.push(nums)
  return ans
};

console.log(subsets([0, 1, 2]))
