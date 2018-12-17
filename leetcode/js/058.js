/**
给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) {
    return 0
  }
  let arr = s.split(' ').filter(x => {
    return x !== ''
  })
  return arr[arr.length - 1] && arr[arr.length - 1].length || 0
};

console.log(lengthOfLastWord(" "))
