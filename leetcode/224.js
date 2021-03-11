/**
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [1]

  let len = s.length

  let ans = 0
  let sign = 1

  let i = 0
  while (i < len) {
    let char = s[i]
    if (char === ' ') i++
    else if (char === '+') {
      sign = stack[stack.length - 1]
      i++
    } else if (char === '-') {
      sign = -stack[stack.length - 1]
      i++
    } else if (char === '(') {
      stack.push(sign)
      i++
    } else if (char === ')') {
      stack.pop()
      i++
    } else {
      let num = 0
      while(i < len && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
        num = num * 10 + parseInt(s[i])
        i++
      }
      ans += sign * num
    }
  }
  return ans
}

calculate("(12+(4+5+2)-3)+(6+8)")
