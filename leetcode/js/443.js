/**
给定一组字符，使用原地算法将其压缩。

压缩后的长度必须始终小于或等于原数组长度。

数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

在完成原地修改输入数组后，返回数组的新长度。
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length === 0 ) return chars
  let char = chars[0]
  let ans = 1
  let count = 1
  for (let i = 1; i < chars.length; i++) {
    if (char === chars[i]) {
      ++count
    } else {
      if (count > 1) {
        let s = String(count)
        for (let j = 0; j < s.length; j++) {
          chars[ans++] = s[j]
        }
      }
      char = chars[i]
      count = 1
      chars[ans++] = char
    }
  }
  if (count > 1) {
    let s = String(count)
    for (let j = 0; j < s.length; j++) {
      chars[ans++] = s[j]
    }
  }
  chars.length = ans
  return ans
}

