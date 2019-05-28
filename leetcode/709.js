/**
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let ans = ''
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i)
    if (ascii >= 65 && ascii <= 90) {
      ans += String.fromCharCode(ascii + 32)
    } else {
      ans += String.fromCharCode(ascii)
    }
  }
  return ans
};
