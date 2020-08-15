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
  if (!preorder || preorder.length === 0) {
    return null
  }
  let inMap = new Map()
  let length = inorder.length
  for (let i = 0; i < length; i++) {
    inMap.set(inorder[i], i)
  }

  return buildTreeNode(preorder, 0, length - 1, inorder, 0, length - 1, inMap)
}

function buildTreeNode (preorder, preorderStart, preorderEnd, inorder, inorderStart, inorderEnd, inMap) {
  if (preorderStart > preorderEnd) {
    return null
  }
  let rootValue = preorder[preorderStart]
  let rootIndex = inMap.get(rootValue)

  let root = new TreeNode(rootValue)
  if (preorderStart === preorderEnd) {
    return root
  } else {
    let leftNodeCount = rootIndex - inorderStart  // 左节点个数
    let rightNodeCount = inorderEnd - rootIndex // 右节点个数
  
    root.left = buildTreeNode(preorder, preorderStart + 1, preorderStart + leftNodeCount, inorder, inorderStart, rootIndex - 1, inMap)
  
    root.right = buildTreeNode(preorder, preorderEnd - rightNodeCount + 1, preorderEnd, inorder, rootIndex + 1, inorderEnd, inMap)
  
    return root
  }
}
