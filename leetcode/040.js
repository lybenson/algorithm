/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 

 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
      if (i > start && candidates[i - 1] === candidates[i]) continue
      path.push(candidates[i])
      dfs(i + 1, target - candidates[i], path)
      path.pop()
    }
  }
};
