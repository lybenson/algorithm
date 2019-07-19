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
  candidates = candidates.sort()
  let ans = []
  let cur = []

  dfs(target, 0, cur, ans)
  return ans
  
  function dfs (target, s, cur, ans) {
    if (target === 0) {
      let ans_item = [...cur]
      ans.push(ans_item)
      return
    }
    for (let i = s; i < candidates.length; i++) {
      if (candidates[i] > target) break
      cur.push(candidates[i])
      dfs(target - candidates[i], i, cur, ans)
      cur.pop()
    }
  }
};

