/**
在本问题中, 树指的是一个连通且无环的无向图。

输入一个图，该图由一个有着N个节点 (节点值不重复1, 2, ..., N) 的树及一条附加的边构成。附加的边的两个顶点包含在1到N中间，这条附加的边不属于树中已存在的边。

结果图是一个以边组成的二维数组。每一个边的元素是一对[u, v] ，满足 u < v，表示连接顶点u 和v的无向图的边。

返回一条可以删去的边，使得结果图是一个有着N个节点的树。如果有多个答案，则返回二维数组中最后出现的边。答案边 [u, v] 应满足相同的格式 u < v
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let nodeCount = edges.length
  let parent = new Array(nodeCount + 1)

  for (let i = 1; i <= nodeCount; i++) {
    parent[i] = i
  }
  for (let i = 0; i < nodeCount; i++) {
    let edge = edges[i]
    let node1 = edge[0]
    let node2 = edge[1]
    if (find(parent, node1) !== find(parent, node2)) {
      union(parent, node1, node2)
    } else {
      return edge
    }
  }
  return []
};

function union (parent, index1, index2) {
  parent[find(parent, index1)] = find(parent, index2)
}
function find (parent, index) {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index])
  }
  return parent[index]
}
