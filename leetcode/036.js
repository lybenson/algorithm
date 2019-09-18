/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let m = board.length
  let n = board[0].length

  for (let i = 0; i < m; i++) {
    let rows = new Set()
    let cols = new Set()
    let cube = new Set()
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== '.' && rows.has(board[i][j])) return false
      else rows.add(board[i][j])

      if (board[j][i] !== '.' && cols.has(board[j][i])) return false
      else cols.add(board[j][i])

      let rowIndex = 3 * parseInt(i / 3)
      let colIndex = 3 * (i % 3)

      if (board[rowIndex + parseInt(j / 3)][colIndex + j % 3] != '.' && cube.has(board[rowIndex + parseInt(j / 3)][colIndex + j % 3])) return false
      else cube.add(board[rowIndex + parseInt(j / 3)][colIndex + j % 3])
    }
  }
  return true
}
