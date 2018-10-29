/**
你被请来给一个要举办高尔夫比赛的树林砍树. 树林由一个非负的二维数组表示， 在这个数组中：

0 表示障碍，无法触碰到.
1 表示可以行走的地面.
比1大的数 表示一颗允许走过的树的高度.
你被要求按照树的高度从低向高砍掉所有的树，每砍过一颗树，树的高度变为1。

你将从（0，0）点开始工作，你应该返回你砍完所有树需要走的最小步数。 如果你无法砍完所有的树，返回 -1 。

可以保证的是，没有两棵树的高度是相同的，并且至少有一颗树需要你砍。
 */

/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  // 从(0, 0)到第一矮的树，再到第二矮的树，类推直到到达了最高的树，所经历的步数的和
  let m = forest.length
  let n = forest[0].length
  let trees = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 0) {
        trees.push([forest[i][j], j, i])
      }
    }
  }
  // 按高度排序
  trees.sort((a, b) => a[0] - b[0])

  // sx, sy表示当前坐标
  let sx = 0
  let sy = 0

  let treesLen = trees.length
  let ans = 0
  console.log(trees)
  for (let i = 1; i < treesLen; i++) {
    // 当前要达到的坐标
    let tx = trees[i][1]
    let ty = trees[i][2]

    // 计算从(sx, sy) 到 (tx, ty)的最短路径
    let steps = BFS(forest, sx, sy, tx, ty)
    if (steps === 0) return 0
    forest[ty][tx] = 1
    ans += steps

    sx = tx
    sy = ty
  }

  function BFS (forest, sx, sy, tx, ty) {
    console.log(`ty=${ty}, tx=${tx}`)
    let steps = 0
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let visited = [[]]
    let queue = []
    queue.push([sx, sy])
  
    while(queue.length != 0) {
      let new_nodes = queue.length
      while(new_nodes--) {
        let node = queue[0]
        console.log(`node=${node}`)
        queue.pop()
        let cx = node[0]
        let cy = node[1]
        if (cx == tx && cy == ty) {
          
          return steps
        }
        for (let i = 0; i < 4; ++i) {
          let x = cx + dirs[i][0] || -1
          let y = cy + dirs[i][1] || -1
          if (x < 0 || x == n  || y < 0 || y == m || !forest[y][x] || visited[y][x]) continue

          // visited[y][x] = 1
          console.log(`y=${y}, x=${x}`)
          queue.push(x, y)
        }
      }
      ++steps
    }
    return 0
  }
  return ans
}

console.log(cutOffTree([[1,2,3], [0,0,4], [7,6,5]]))
