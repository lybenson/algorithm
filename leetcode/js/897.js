/**
 * 给定一个树，按中序遍历重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let nodeValues = []
  function inOrder (node) {
    if (!node) return
    inOrder(node.left)
    nodeValues.push(node.val)
    inOrder(node.right)
  }
  inOrder(root)

  let node = new TreeNode(nodeValues[0])
  let ans = node
  for (let i = 1; i < nodeValues.length; i++) {
    node.right = new TreeNode(nodeValues[i])
    node = node.right
  }
  return ans
};