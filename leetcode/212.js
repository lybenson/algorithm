/**
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (board.length === 0) return false
  let h = board.length
  let w = board[0].length

  let ans = []
  let word = ''
  for (let index = 0; index < words.length; index++) {
    word = words[index]
    if (searchWord) {
      ans.push(word)
    }
  }
  return ans

  function searchWord () {
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        if (search(0, i, j)) {
          ans.push(word)
          return true
        }
      }
    }
    return false
  }

  function search (d, x, y) {
    if (x < 0 || x === w || y < 0 || y === h || word[d] !== board[y][x]) return false

    if (d === word.length - 1) return true

    let char = board[y][x]
    board[y][x] = 0
    let isMatch = search(d + 1, x + 1, y) || search(d + 1, x - 1, y) || search(d + 1, x, y + 1) || search(d + 1, x, y - 1)
    board[y][x] = char
    return isMatch
  }
};