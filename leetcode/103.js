/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// BFS
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let res = []
  let current_level = [root]
  let depth = 0
  while (current_level.length) {
    let next_level = []
    let values = []
    for (let i = 0; i < current_level.length; i++) {
      let node = current_level[i]
      values.push(node.val)
      if (node.left) next_level.push(node.left)
      if (node.right) next_level.push(node.right)
    }
    if (depth % 2 === 1) res.push(values.reverse())
    else res.push(values)
    depth += 1
    current_level = next_level
  }
  return res
};

// DFS
var zigzagLevelOrder2 = function(root) {
  let res = []
  dfs(0, root)
  return res
  function dfs(i, root){
    if(!root) return
    if(!Array.isArray(res[i])) res[i] = []
    if(i & 1) res[i].unshift(root.val)
    else res[i].push(root.val)
    dfs(i+1, root.left)
    dfs(i+1, root.right)
  }
};
