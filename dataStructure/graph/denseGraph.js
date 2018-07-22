// 稠密图 - 邻接矩阵

function DenseGraph (n, directed){
  this.vertices = n // 顶点数
  this.edges = 0 // 边数
  this.directed = directed // 是否有向图
  this.addEdge = addEdge // 在两个顶点之间建立一条边
  this.hasEdge = hasEdge // 两个顶点之间是否有边

  this.g = []
  for (let i = 0; i < n; i++) {
    let temp = []
    for (let j = 0; j < n; j++) {
      temp[j] = false
    }
    this.g.push(temp)
  }

  // 在顶点v和w之间建立边
  function addEdge (v, w) {
    if (this.hasEdge(v, w)) {
      return
    }
    this.g[v][w] = true
    if (!this.directed) {
      this.g[w][v] = true
    }
    this.edges++
  }

  function hasEdge (v, w) {
    return this.g[v][w]
  }

}

let dense = new DenseGraph(4, false)
console.log(dense.g)
dense.addEdge(1, 3)
console.log(dense.g)
console.log(dense.edges)