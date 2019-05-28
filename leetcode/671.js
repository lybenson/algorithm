/**
 * 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。 

给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let min = root.val
  return dfs(root)
  function dfs (node) {
    if (!node) return -1
    if (node.val > min) return node.val
    
    let sl = dfs(node.left)
    let sr = dfs(node.right)
    if (sl === -1) return sr
    if (sr === -1) return sl
    return Math.min(sl, sr)
  }
};