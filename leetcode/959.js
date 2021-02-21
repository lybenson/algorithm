/**
 * 在由 1 x 1 方格组成的 N x N 网格 grid 中，每个 1 x 1 方块由 /、\ 或空格构成。这些字符会将方块划分为一些共边的区域。

（请注意，反斜杠字符是转义的，因此 \ 用 "\\" 表示。）。

返回区域的数目。
 */

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  let n = grid.length
  let uf =  new UnionFind((n + 1) * (n + 1))

  for (let i = 0; i < 4; i++) {
    uf.union(i, i+ 1)
    uf.union(n * (n + 1) + i, n * (n + 1) + i + 1)
    uf.union(getPosition(i, 0), getPosition(i + 1, 0))
    uf.union(getPosition(i, n), getPosition(i + 1, n))
  }

  for (let i = 0; i < n; i++) {
    grid[i]
  }
};

function UnionFind (n) {
  this.parent = new Array(n)
  this.count = 0

  for (let i = 0; i < n; i++) {
    this.parent[i] = i
  }

  this.union = function (x, y) {
    let rootX = this.find(x)
    let rootY = this.find(y)
    if (rootX === rootY) {
      this.count++
    } else {
      this.parent[rootX] = rootY
    }
  }

  this.find = function (x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }
}
