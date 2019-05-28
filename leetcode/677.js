/**
 * 实现一个 MapSum 类里的两个方法，insert 和 sum。

对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。

对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。
 */
/**
 * Initialize your data structure here.
 */
var Trie = function (num) {
  this.num = num
  this.children = {}
}
var MapSum = function() {
  this.root = new Trie(0)
  this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let diff = val - (this.map.get(key) | 0)
  let cur = this.root
  for (let i = 0; i < key.length; i++) {
    const char = key[i]
    if (!cur.children[char]) {
      cur.children[char] = new Trie(diff)
    } else {
      cur.children[char].num += diff
    }
    cur = cur.children[char]
  }
  this.map.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let cur = this.root
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i]
    if (!cur.children[char]) return 0
    cur = cur.children[char]
  }
  return cur.num
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */