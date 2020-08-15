// 重建二叉树


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder == null || preorder.length == 0) {
      return null
  }
  let indexMap = new Map() // map 代替indexOf
  let length = preorder.length;
  for (let i = 0; i < length; i++) {
      indexMap.set(inorder[i], i)
  }
  let root = buildTreeNode(preorder, 0, length - 1, inorder, 0, length - 1, indexMap)

  return root
}

function buildTreeNode (preorder, preorderStart, preorderEnd, inorder, inorderStart, inorderEnd, indexMap) {
  if (preorderStart > preorderEnd) {
      return null
  }
  let rootVal = preorder[preorderStart]
  let root = new TreeNode(rootVal)
  if (preorderStart == preorderEnd) {
      return root
  } else {
      let rootIndex = indexMap.get(rootVal)

      let leftNodes = rootIndex - inorderStart // 左节点个数
      let rightNodes = inorderEnd - rootIndex // 右节点个数

      let leftSubtree = buildTreeNode(preorder, preorderStart + 1, preorderStart + leftNodes, inorder, inorderStart, rootIndex - 1, indexMap)
      let rightSubtree = buildTreeNode(preorder, preorderEnd - rightNodes + 1, preorderEnd, inorder, rootIndex + 1, inorderEnd, indexMap)
      root.left = leftSubtree
      root.right = rightSubtree
      return root
  }
}
