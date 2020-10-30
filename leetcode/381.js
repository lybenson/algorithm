/**
设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。

注意: 允许出现重复元素。

insert(val)：向集合中插入元素 val。
remove(val)：当 val 存在时，从集合中移除一个 val。
getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。
 */
/**
 * Initialize your data structure here.
 */

var RandomizedCollection = function() {
  this.map = new Map() // key: set
  this.vals = []
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  let count = this.vals.push(val)
  if (!this.map.has(val)) {
    this.map.set(val, new Set())
  }
  this.map.get(val).add(count - 1)
  return this.map.get(val).size === 1
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (!this.map.has(val) || this.map.get(val).size === 0) return false

  let indexSet = this.map.get(val)

  // 从set获取要删除元素的索引
  let index = Array.from(indexSet)[0]
  indexSet.delete(index)

  let lastVal = this.vals[this.vals.length - 1]
  this.vals[index] = lastVal

  if (index !== this.vals.length - 1) {
    const lastSet = this.map.get(lastVal)
    lastSet.delete(this.vals.length - 1)
    lastSet.add(index)
  }
  this.vals.pop()

  return true
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let random = Math.floor((Math.random() * this.vals.length))
  return this.vals[random]
};
/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */