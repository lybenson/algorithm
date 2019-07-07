/**
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树
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
 * @return {number[]}
 */
var findMode = function(root) {
  let vmap = new Map()
  let ans = []
  function order (node) {
    if (!node) return
    vmap.has(node.val) ? vmap.set(node.val, vmap.get(node.val) + 1) : vmap.set(node.val, 1)
    order(node.left)
    order(node.right)
  }
  order(root)
  let max = Math.max.apply(null, [...vmap.values()])
  for (let key of vmap.keys()) {
    if (vmap.get(key) === max) ans.push(key)
  }
  return ans
};
