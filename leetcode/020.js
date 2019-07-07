/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let len = s.length
  
  let map = new Map()
  map.set('}', '{')
  map.set(']', '[')
  map.set(')', '(')
  for (let i = 0; i < len; i++) {
    let char = s[i]
    if (map.has(char)) {
      let topItem = stack.pop()
      if (map.get(char) !== topItem) return false
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0 ? true : false
};