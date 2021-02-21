/**
有一个 m x n 的二元网格，其中 1 表示砖块，0 表示空白。砖块 稳定（不会掉落）的前提是：

一块砖直接连接到网格的顶部，或者
至少有一块相邻（4 个方向之一）砖块 稳定 不会掉落时

给你一个数组 hits ，这是需要依次消除砖块的位置。每当消除 hits[i] = (rowi, coli) 位置上的砖块时，对应位置的砖块（若存在）会消失，然后其他的砖块可能因为这一消除操作而掉落。一旦砖块掉落，它会立即从网格中消失（即，它不会落在其他稳定的砖块上）。

返回一个数组 result ，其中 result[i] 表示第 i 次消除操作对应掉落的砖块数目。

注意，消除可能指向是没有砖块的空白位置，如果发生这种情况，则没有砖块掉落。

 */

/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  let rows = grid.length
  let cols = grid[0].length

  // 第 1 步：把 grid 中的砖头全部击碎
  let copy = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      copy[i][j] = grid[i][j]
    }
  }
  // 把copy中hits位置的砖头击碎
  for (const hit of hits) {
    copy[hit[0]][hit[1]] = 0
  }

  // 第 2 步：建图，把砖块和砖块的连接关系输入并查集，size 表示二维网格的大小，也表示虚拟的「屋顶」在并查集中的编号
  let size = rows * cols
  let unionFind = new UnionFind(size + 1)

  // 将下标为 0 的行的砖块与「屋顶」相连
  for (let j = 0; j < cols; j++) {
    if (copy[0][j] === 1) {
      unionFind.union(j, size)
    }
  }
  
};

function UnionFind (n) {
  this.parent = new Array(n) // 节点的父节点
  this.size = new Array(n) // 以当前节点为根节点的子树的节点总数

  for (let i = 0; i < n; i++) {
    this.parent[i] = i
    this.size = 1
  }

  this.find = (x) => {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }
  this.union = (x, y) => {
    let rootX = this.find(x)
    let rootY = this.find(y)

    if (rootX === rootY) return
    this.parent[rootX] = rootY
    this.size[rootY] += this.size[rootX]
  }
  // 连通分量的个数
  this.getSize = (x) => {
    let root = this.find(x)
    return this.size[root]
  }
}
