var mirrorTree = function(root) {
  if (!root) return root
  let left = root.left
  let right = root.right

  left && mirrorTree(left)
  right && mirrorTree(right)

  root.left = right
  root.right = left
  return root
};
