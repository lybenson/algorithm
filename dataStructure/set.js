// 集合
// 集合(set)是一种包含不同元素的数据结构。集合中的元素称为成员。集合的两个最重 要特性是:首先，集合中的成员是无序的其次，集合中不允许相同成员存在

function Set () {
  this.dataStore = []
  this.add = add // 添加
  this.remove = remove // 删除
  this.size = size
  this.contains = contains // 是否包含某元素
  this.union = union // 并集
  this.intersect = intersect // 交集 
  this.subset = subset // 判断一个集合是否是另一个集合的子集
  this.difference = difference
  this.show = show // 数据展示

  function add (data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data)
      return true
    } else {
       return false;
    }
  }

  function remove (data) {
    let pos = this.dataStore.indexOf(data)
    if ( pos > -1 ) {
      this.dataStore.splice(pos,1)
      return true
    } else {
      return false
    } 
  }
  function show () {
    return this.dataStore
  }

  function contains (data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true
    } else {
      return false
    } 
  }

  function union (set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; i++) {
       tempSet.add(this.dataStore[i])
    }
    for (var i = 0; i < set.dataStore.length; i++) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i])
      }
    }
    return tempSet
  }

  function intersect (set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      } 
    }
    return tempSet
  }

  function size () {
    return this.dataStore.length
  }

  function subset (set) {
    if (this.size() > set.size()) {
      return false
    } else {
      for (const member in this.dataStore) {
        if (!set.contains(member)) {
          return false
        } 
      }
    }
    return true
  }

  function difference (set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      } 
    }
    return tempSet
  }
}

