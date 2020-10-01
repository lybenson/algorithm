/**
写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

 */

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  let len = str.length
  let isStart = false
  let numStr = ''

  for (let i = 0; i < len; i++) {
    let char = str[i]

    if (isStart === false) {
      if (isNumber(char) || char === '+' || char === '-') {
        isStart = true
        numStr += char
        continue
      } else if (char === ' ') {
        continue
      } else {
        return 0
      }
    } else {
      if (isNumber(char)) {
        numStr += char
      } else {
        break
      }
    }
  }
  let t = numStr.length
  let num = 0
  let bit = 1

  let maxBoder = (2**31 - 1) / 10
  let minBorder = -(2**31) / 10
  while (t > 0) {
    let char = numStr[t - 1]
    if (char === '-') num *= -1
    else if (char === '+') num *= 1
    else {
      num += Number(char) * bit
    }
    if (num / 10 > maxBoder) {
      return numStr[0] === '-' ? minBorder * 10 : maxBoder * 10
    }
    bit *= 10
    t--
  }
  return num
}

function isNumber (char) {
  if (char === '0' || char === '1' || char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9') {
    return true
  }
  else return false
}