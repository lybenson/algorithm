/**
 * 在有向图中, 我们从某个节点和每个转向处开始, 沿着图的有向边走。 如果我们到达的节点是终点 (即它没有连出的有向边), 我们停止。

现在, 如果我们最后能走到终点，那么我们的起始节点是最终安全的。 更具体地说, 存在一个自然数 K,  无论选择从哪里开始行走, 我们走了不到 K 步后必能停止在一个终点。

哪些节点最终是安全的？ 结果返回一个有序的数组。

该有向图有 N 个节点，标签为 0, 1, ..., N-1, 其中 N 是 graph 的节点数.  图以以下的形式给出: graph[i] 是节点 j 的一个列表，满足 (i, j) 是图的一条有向边。
 */
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  // three state
  // 0 not visited  1 unsafe  2 safe
  let states = new Array(graph.length).fill(0)
  let ans = []

  for (let i = 0; i < graph.length; i++) {
    if (dfs_safe(i)) {
      ans.push(i)
    }
  }
  return ans

  function dfs_safe (cur) {
    if (states[cur])
      return states[cur] === 2
    states[cur] = 1
    for (let j = 0; j < graph[cur].length; j++) {
      if (states[graph[cur][j]] === 1 || !dfs_safe(graph[cur][j])) return false
    }
    states[cur] = 2
    return true
  }
}
