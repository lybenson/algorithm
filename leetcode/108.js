/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return dfs(0, nums.length - 1)
  function dfs(start, end){
    if(start > end){
      return null
    }
    let mid = start + ~~((end - start) / 2)
    let root = new TreeNode(nums[mid])
    root.left = dfs(start, mid - 1);
    root.right = dfs(mid + 1, end)
    return root
  }
};