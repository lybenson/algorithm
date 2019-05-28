/**
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

 */

class LinkedList {
  constructor(key, val) {
    this.pre = null
    this.next = null
    this.key = key
    this.val = val
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.capacity == 1) {
    return this.map.get(key) || -1
  }
  
  const node = this.map.get(key)
  if (!node) {
    return -1
  }
  
  if (this.capacity > 1 && this.map.size > 1 && node != this.head) {
    if (node.next) {
      node.pre.next = node.next
      node.next.pre = node.pre
    } else {
      this.tail = node.pre
      this.tail.next = null
    }
    node.next = this.head
    this.head.pre = node
    this.head = node
    this.head.pre = null
  }
  return node.val
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.capacity == 1) {
    this.map.clear()
    this.map.set(key, value)
    return
  }
  
  const val = this.map.get(key)
  if (val) {
    val.val = value
    if (this.map.size > 1 && val != this.head) {
      if (val.next) {
        val.pre.next = val.next
        val.next.pre = val.pre
      } else {
        this.tail = val.pre
        this.tail.next = null
      }
    
      val.next = this.head
      this.head.pre = val
      this.head = val
      this.head.pre = null
    }
    return    
  }
  
  if (this.map.size == this.capacity) {
    this.map.delete(this.tail.key)
    this.tail = this.tail.pre
    this.tail.next = null
  }
  
  const node = new LinkedList(key, value)
  this.map.set(key, node) 
  if (!this.tail) {
    this.head = node
    this.tail = node
    return
  }
  
  node.next = this.head
  this.head.pre = node
  this.head = node
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
