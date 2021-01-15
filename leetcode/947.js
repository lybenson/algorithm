/**
n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。

如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。

给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子 的最大数量。
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  let unionFind = new UnionFind()

  for (const stone of stones) {
    unionFind.union(stone[0] + 10001, stone[1])
  }
  return stones.length - unionFind.getCount()
};

function UnionFind () {
  this.parent = new Map()
  this.count = 0

  this.find = (x) => {
    if (!this.parent.has(x)) {
      this.parent.set(x, x)
      this.count++
    }

    if (x !== this.parent.get(x)) {
      this.parent.set(x, this.find(this.parent.get(x)))
    }
    return this.parent.get(x)
  }
  this.union = (x, y) => {
    let rootX = this.find(x)
    let rootY = this.find(y)

    if (rootX === rootY) return
    this.parent.set(rootX, rootY)
    this.count--
  }
  // 连通分量的个数
  this.getCount = () => {
    return this.count
  }
}
