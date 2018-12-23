/**
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort()
  let ans = []
  function dfs (n, start, cur) {
    if (n == cur.length) {
      for (let i = 0; i < ans.length; i++) {
        if (ans[i].sort().toString() === cur.sort().toString()) return
      }
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

console.log(subsetsWithDup([4,1,0]))