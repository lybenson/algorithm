/**
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ans = []
  function bfs(node, level) {
    if (!node) return
    if (!ans[level]) ans[level] = [node.val]
    else ans[level].push(node.val)
    level++
    for (let c in node.children) {
      bfs(node.children[c], level)
    }
  }
  bfs(root, 0)
  return ans
};