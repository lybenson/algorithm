// 队列
// 队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按 顺序排列的数据，先进先出(First-In-First-Out，FIFO)

function Queue() {
  this.dataStore = []
  this.enqueue = enqueue // 向队尾添加一个元素
  this.dequeue = dequeue // 队首删除元素并返回这个删除的元素
  this.front = front // 获取队首元素
  this.back = back // 获取队尾元素
  this.toString = toString // 返回队列中的所有元素 
  this.isEmpty = isEmpty // 判断队列是否为空

  function enqueue (element) {
    this.dataStore.push(element)
  }
  function dequeue () {
    return this.dataStore.shift()
  }
  function front () {
    return this.dataStore[0]
  }
  function back () {
    return this.dataStore[this.dataStore.length - 1]
  }
  function toString() {
    let retStr = ""
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n"
    }
    return retStr
  }
  function isEmpty () {
    return this.dataStore.length == 0 ? true : false
  }
}

// 优先队列
// 从优先队列中删除元素时，需要考虑优先权的限制
function Patient(name, code) {
  this.name = name
  this.code = code // code定义元素的优先级
}
// 优先级高的先删除
function dequeue() {
  let priority = this.dataStore[0].code
  for (let i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < priority) {
      priority = i
    } 
  }
  return this.dataStore.splice(priority, 1)
}

