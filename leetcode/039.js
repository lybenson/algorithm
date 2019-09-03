/**
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合

candidates 中的数字可以无限制重复被选取

所有数字（包括 target）都是正整数
解集不能包含重复的组合

输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]

 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 回溯法
  candidates = candidates.sort((a, b) => a - b)

  let ans = []
  let len = candidates.length
  dfs(0, target, [])
  return ans

  function dfs (start, target, path) {
    if (target === 0) {
      ans.push([...path])
      return
    }
    for (let i = start; i < len; i++) {
      if (candidates[i] > target) break
      path.push(candidates[i])
      dfs(i, target - candidates[i], path)
      path.pop()
    }
  }
};

