/**
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) return []
  return generate(1, n)

  function generate(start, end) {
    let ans = []
    if (start > end) {
      ans.push(null)
      return ans
    }
    for (let i = start; i <= end; ++i) {
      let left = generate(start, i - 1)
      let right = generate(i + 1, end)
      left.forEach(l => {
        right.forEach(r => {
          let root = new TreeNode(i)
          root.left = l
          root.right = r
          ans.push(root)
        })
      })
    }
    return ans
  }
}