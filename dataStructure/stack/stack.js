// 栈
// 栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。栈被称为一种后入先出(LIFO，last-in-first-out)的数据结构

function Stack () {
  this.dataStore = [] // 栈内元素
  this.top = 0 // 栈顶位置
  this.push = push // 入栈
  this.pop = pop // 出栈并返回出栈的元素
  this.peek = peek // 返回栈顶元素
  this.length = length // 栈中元素个数
  this.clear = clear // 清空栈中元素

  function push (element) {
    this.dataStore[this.top++] = element
  }

  function pop () {
    return this.dataStore[--this.top]
  }

  function peek (){
    return this.dataStore[this.top - 1]
  }

  function length () {
    return this.top
  }

  function clear () {
    this.top = 0
  }
}

let stack = new Stack()
stack.push("name0")
stack.push("name1")
stack.push("name2")
console.log("length: " + stack.length())

console.log(stack.peek())
var popped = stack.pop()
console.log("The popped element is: " + popped)
console.log(stack.peek())
stack.push("Cynthia")
console.log(stack.peek())
stack.clear()
console.log("length: " + stack.length())
console.log(stack.peek())
stack.push("Clayton")
console.log(stack.peek())

// 应用

// 回文： 字符串完整压入栈内后，通过持续弹出栈中的每个字母就可以得到一个新字符串，该字符 串刚好与原来的字符串顺序相反。我们只需要比较这两个字符串即可，如果它们相等，就 是一个回文
function isPalindrome(word) {
  var s = new Stack()
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i])
  }
  var rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word == rword) {
    return true
  } else {
    return false
  }
}

// 括号不匹配问题: 遇到左括号入栈， 遇到右括号出栈, 最后栈为空则括号匹配
function isMatchBracket (expression) {
  let stack = new Stack()
  expression = Array.from(expression)
  expression.forEach(char => {
    if (char === '(') {
      stack.push('(')
    }
    if (char === ')' && stack.length() > 0) {
      stack.pop()
    }
  })
  return stack.length() == 0 ? true : false
}


