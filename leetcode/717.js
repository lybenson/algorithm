/**
 * 有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。
 */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let len = bits.length
  for (let i = 0; i < len; i++) {
    if (bits[i] === 0) {
      if (i + 1 === len) return true
      continue
    }
    if (bits[i] === 1) i++
  }
  return false
};