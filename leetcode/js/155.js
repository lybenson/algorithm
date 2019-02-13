/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.stack.push(x)
    this.stack.push(x)
  } else {
    let top = this.stack[this.stack.length - 1]
    this.stack.push(x)
    if (top < x) {
      this.stack.push(top)
    } else {
      this.stack.push(x)
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 2]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */