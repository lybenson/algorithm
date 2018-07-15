// 列表

function List () {
  this.listSize = 0 // 列表元素个数
  this.pos = 0 // 列表的当前位置
  this.length = length // 返回列表中的元素个数
  this.dataStore = [] //初始化一个空数组来保存列表元素
  this.clear = clear // 清空列表中的元素
  this.toString = toString // 返回列表的字符串形式
  this.getElement = getElement // 返回当前位置的元素
  this.insert = insert // 在现有元素后插入新元素
  this.find = find // 
  this.append = append // 在列表的末尾添加新元素
  this.remove = remove // 从列表中删除元素
  this.front = front // 将列表的当前位置设移动到第一个元素
  this.end = end // 将列表的当前位置移动到最后一个元素
  this.prev = prev // 将当前位置后移一位
  this.next = next // 将当前位置前移一位
  this.currPos = currPos // 返回列表的当前位置
  this.moveTo = moveTo // 将当前位置移动到指定位置
  this.contains = contains // 是否包含某元素

  function append (element) {
    this.dataStore[this.listSize++] = element
  }
  function find (element) {
    this.dataStore.forEach((item, currentIndex) => {
      if (item == element) {
        return currentIndex
      }
      return -1
    })
  }
  function remove (element) {
    let foundAt = this.find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)
      --this.listSize
      return true
    }
    return false
  }
  function length () {
    return this.listSize
  }
  function toString () {
    return this.dataStore
  }
  function insert (element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize
      return true
    }
    return false
  }
  function clear () {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }
  function contains (element) {
    this.dataStore.forEach((item, currentIndex) => {
      if (item == element) {
        return true
      }
    })
    return false
  }
  function front () {
    this.pos = 0
  }
  function end () {
    this.pos = this.listSize - 1
  }
  function prev () {
    if (this.pos > 0) {
       --this.pos
    }
  }
  function next () {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }
  function currPos () {
    return this.pos;
 }
  function moveTo (position) {
    this.pos = position
  }
  function getElement () {
    return this.dataStore[this.pos]
  }
}

let list = new List()
list.append(1)
list.append(2)
list.append(3)
list.append(4)

// list.front() // 移动到首位
// console.log(list.getElement())

// list.next() // 向后移动一位
// console.log(list.getElement())

// 迭代器访问列表
for (list.front(); list.currPos() < list.length(); list.next()) {
  // console.log(list.currPos())
  console.log(list.getElement())
}
