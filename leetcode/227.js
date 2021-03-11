/**
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.trim()
  let stack = []
  let len = s.length

  let i = 0
  let sign = '+'
  let num = 0
  while (i < len) {
    if (s[i] === ' ') {
      i++
      continue
    }
    while(!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + Number(s[i])
      i++
    }

    if (isNaN(Number(s[i])) && s[i] !== ' ') {
      if (sign === '+') {
        stack.push(num)
      }
      else if (sign === '-') stack.push(-num)
      else if (sign === '*') {
        stack.push(stack.pop() * num)
      }
      else if (sign === '/') stack.push(stack.pop() / num | 0)

      sign = s[i]
      num = 0
    }
    i++
  }
  return stack.reduce((prev, next) => prev + next)
}