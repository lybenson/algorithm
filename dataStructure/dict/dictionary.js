// 字典
// 字典是一种以键 - 值对形式存储数据的数据结构, JavaScript 的 Object 类就是以字典的形式设计的

function Dictionary () {
  this.dataSource = new Array()
  this.add = add // 添加
  this.find = find // 查找
  this.remove = remove // 删除
  this.showAll = showAll // 打印字典
  this.count = count // 获取字典长度, 不能使用 length 属性, 当数组的key是字符串时, length属性无效
  function add (key, value) {
    this.dataSource[key] = value
  }

  function find (key) {
    return this.dataSource[key]
  }

  function remove (key) {
    delete this.dataSource[key]
  }

  function showAll () {
    for(let key in Object.keys(this.datastore)) {
      console.log(key + " -> " + this.datastore[key]);
    }
  }
  function count () {
    let n = 0
    for(let key in Object.keys(this.datastore)) {
      ++n
    }
    return n
  }
}


