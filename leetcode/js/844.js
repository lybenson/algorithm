/**
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  function realString(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (char === '#') arr.pop()
      else arr.push(char)
    }
    return arr.join('')
  }
  return realString(S) === realString(T)
};