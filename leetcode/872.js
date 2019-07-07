/**
 * 请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let leafSequence1 = ''
  let leafSequence2 = ''
  dfs(root1, 1)
  dfs(root2, 2)
  return leafSequence1 === leafSequence2
  function dfs(node, num) {
    if (!node) return
    if (!node.left && !node.right) {
      if (num === 1) leafSequence1 += node.val
      else leafSequence2 += node.val
    } else {
      dfs(node.left, num)
      dfs(node.right, num)
    }
  }
};
