/**
 * 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
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
var getMinimumDifference = function(root) {
  if (!node) return -1

  let nodeValues = []

  // 中序遍历结果是从小到大排序后的
  function inOrderTraverseNode (node) {
    if (!node) return
    inOrderTraverseNode(node.left)
    nodeValues.push(node.val)
    inOrderTraverseNode(node.right)
  }
  inOrderTraverseNode(root)

  let ans = nodeValues[nodeValues.length - 1]
  for (let i = 1; i < nodeValues.length; i++) {
    const v = nodeValues[i]
    ans = Math.min(nodeValues[i] - nodeValues[i - 1], ans)
  }

  return ans

};