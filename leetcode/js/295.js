/**
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.l = []
  this.r = []
}

/**
 * @constructor
 */
var MedianFinder = function() {
  this.large = new MinHeap()
  this.small = new MaxHeap()
}

/**
* @param {integer} word
* @return {void}
* Adds a num into the data structure.
*/
MedianFinder.prototype.addNum = function(num) {
  var lg = this.large.peek()
  var sm = this.small.peek()

  if(num <= sm) {
    this.small.add(num)
  } else {
    this.large.add(num)
  }

  var diff = this.small.size() - this.large.size()
  if(diff > 1) {
    this.large.add(this.small.pop())
  } else if(diff < 0) {
    this.small.add(this.large.pop())
  }
}
MedianFinder.prototype.findMedian = function() {
  return this.small.size() > this.large.size() ? this.small.peek() : (this.small.peek() + this.large.peek()) / 2
}

class MaxHeap {
  constructor() {
    this.arr = []
  }

  peek() {
    return this.arr[0] || null
  }

  size() {
    return this.arr.length
  }

  pop() {
    var arr = this.arr
    var len = arr.length

    if(len === 0) {
      return null
    }
    var max = arr[0]
    arr[0] = arr[len - 1]
    arr.pop()
    this.sinkDown(0)
    return max
  }

  add (val) {
    var arr = this.arr
    arr.push(val)
    this.bubbleUp(arr.length - 1)
  }

  bubbleUp(n) {
    var arr = this.arr;

    while(n > 0) {
      var parentN = Math.floor((n + 1)/2) - 1
      if(arr[parentN] > arr[n]) {
        break
      }
      var tmp = arr[n]
      arr[n] = arr[parentN]
      arr[parentN] = tmp
      n = parentN
    } 
  }

  sinkDown(n) {
    var arr = this.arr
    var len = arr.length
    var val = arr[n]

    while(true) {
      
      var swap = null;
      var child2N = (n+1) * 2
      var child1N = child2N - 1
      
      if(child1N < len && arr[child1N] > val) {
        swap = child1N
      }

      if(child2N < len && arr[child2N] > val && arr[child2N] >= arr[child1N]) {
        swap = child2N
      }
    
      if(swap === null) {
        break
      }

      var tmp = arr[n]
      arr[n] = arr[swap]
      arr[swap] = tmp
      n = swap
    } 
  }
}


class MinHeap {
  constructor() {
    this.arr = []
}

  peek() {
    return this.arr[0] || null
  }

  size() {
    return this.arr.length
  }

  pop() {
    var arr = this.arr
    var len = arr.length

    if(len === 0) {
      return null
    }
    var min = arr[0]
    arr[0] = arr[len - 1]
    arr.pop()
    this.sinkDown(0)
    return min
  }

  add(val) {
    var arr = this.arr
    arr.push(val)
    this.bubbleUp(arr.length - 1)
  }

  bubbleUp(n) {
    var arr = this.arr

    while(n > 0) {
      var parentN = Math.floor((n + 1)/2) - 1
      if(arr[parentN] <= arr[n]) {
        break
      }

      var tmp = arr[n]
      arr[n] = arr[parentN]
      arr[parentN] = tmp
      n = parentN
    } 
  }

  sinkDown(n) {
    var arr = this.arr
    var len = arr.length
    var val = arr[n]

    while(true) {
      var swap = null
      var child2N = (n+1) * 2
      var child1N = child2N - 1
      if(child1N < len && arr[child1N] < val) {
        swap = child1N
      }

      if(child2N < len && arr[child2N] < val && arr[child2N] <= arr[child1N]) {
        swap = child2N
      }

      if(swap === null) {
        break
      }

      var tmp = arr[n]
      arr[n] = arr[swap]
      arr[swap] = tmp
      n = swap
    } 
  }
}
