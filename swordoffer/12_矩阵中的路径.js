/**
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length
  let n = board[0].length

  // 寻找起始位置, 并从起始位置开始dfs
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, 0, i, j)) return true
      }
    }
  }
  return false

  function dfs(board, index, x, y) {
    if (index === word.length) return true
    if (x < 0 || x >= m || y < 0 || y>= n || board[x][y] !== word[index]) {
      return false
    }
    board[x][y] = 1
    let success = dfs(board, index + 1, x - 1, y) || dfs(board, index + 1, x + 1, y) || dfs(board, index + 1, x, y - 1) || dfs(board, index + 1, x, y + 1)
    board[x][y] = word[index]

    return success
  }
};