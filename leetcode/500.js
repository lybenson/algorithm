/**
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const rows = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ]

  return words.filter(word => {
    const wordArr = word.toLocaleLowerCase().split('');
    return rows.some(row => wordArr.every(item => row.includes(item)))
  })
};
