/**
 * 给定无向连通图中一个节点的引用，返回该图的深拷贝（克隆）。图中的每个节点都包含它的值 val（Int） 和其邻居的列表（list[Node]）。
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let map = new Map()
  return dfs(node)

  function dfs (node) {
    if (!node) return null
    if (map.has(node)) {
      return map.get(node)
    }
    let root = new Node(node.label, [])
    map.set(node, root)
    for (const neighbor of node.neighbors) {
      let clone = dfs(neighbor)
      root.neighbors.push(clone)
    }
    return root
  }
};
