/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return dfs(root, undefined, undefined)
  function dfs (node, min, max) {
    if (!node) return true
    if ((min !== undefined && node.val <= min) || (max !== undefined && node.val >= max)) return false
    return dfs(node.left, min, root.val) && dfs(node.right, node.val, max)
  }
};
