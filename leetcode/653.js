/**
 * 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
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
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let map = new Map()
  function traverse(node) {
    if (!node) return false
    let v = k - node.val
    if (map.has(v)) return true
    else map.set(node.val, true)

    return traverse(node.left) || traverse(node.right)
  }

  return traverse(root)
};