/**
给定一棵二叉搜索树，请找出其中第k大的节点。
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let nodes = []
  inOrder(root)
  return nodes[nodes.length - k]
  function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    nodes.push(root.val)
    inOrder(root.right)
  }
};
