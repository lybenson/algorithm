// 稀疏图 - 邻接表

function SparsGraph (n, directed){
  this.vertices = n // 顶点数
  this.edges = 0 // 边数
  this.directed = directed // 是否有向图
  this.addEdge = addEdge // 在两个顶点之间建立一条边
  this.showGraph = showGraph

  this.adj = []
  for (let i = 0; i < n; i++) {
    this.adj[i] = []
    this.adj[i].push()
  }
  function addEdge (v, w) {
    this.adj[v].push(w)
    if (v != w && !this.directed) {
      this.adj[w].push(v)
    }
    this.edges++
  }

  function showGraph () {
    for (let i = 0; i < this.vertices; i++) {
      console.log(`${i} ——> ${this.adj[i].join(' ')}`) 
    }
  }

}

let spars = new SparsGraph(4, false)
console.log(spars.adj)
spars.addEdge(1, 3)
console.log(spars.showGraph())
