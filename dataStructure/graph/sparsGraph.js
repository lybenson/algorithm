// 稀疏图 - 邻接表

function SparsGraph (n, directed){
  this.vertices = n // 顶点数
  this.edges = 0 // 边数
  this.directed = directed // 是否有向图
  this.addEdge = addEdge // 在两个顶点之间建立一条边
  this.showGraph = showGraph
  this.dfs = dfs
  this.bfs = bfs

  this.marked = [] // 记录顶点是否被访问过
  this.adj = [] // 邻接表
  
  for (let i = 0; i < n; i++) {
    this.adj[i] = []
    this.adj[i].push()
    this.marked[i] = false
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

  function dfs (v) {
    this.marked[v] = true
    if (this.adj[v]) {
      console.log('访问了节点' + v)
    }
    let s = this.adj[v]
    for (let i = 0; i < s.length; i++) {
      if (!this.marked[s[i]]) {
        this.dfs(s[i])
      }
    }
  }

  function bfs (s) {
    let queue = []
    queue.push(s)
    while(queue.length > 0) {
      let v = queue.shift() // 删除队列中第一个元素
      this.marked[v] = true // 将删除的元素标记为已访问
      
      console.log('访问了节点' + v)

      let b = this.adj[v] // 获取删除元素关联的顶点数组
      b.forEach(item => {
        if (!this.marked[item]) {
          queue.push(item)
        }
      })
    }
  }
}

let spars = new SparsGraph(5, false)
spars.addEdge(0, 1)
spars.addEdge(0, 2)
spars.addEdge(1, 3)
spars.addEdge(2, 4)

// spars.showGraph()
console.log(spars.adj)

spars.bfs(0)