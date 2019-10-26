/**
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  // 记录数字是否使用过如 rows[0][1] 表示第0行数字1是否存在. 0表示未存在，1表示存在
  let rows = new Array(9).fill(null).map(() => new Array(10).fill(0))
  let cols = new Array(9).fill(null).map(() => new Array(10).fill(0))
  let boxes = new Array(9).fill(null).map(() => new Array(10).fill(0))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let char = board[i][j]
      if (char !== '.') {
        let number = parseInt(char)
        rows[i][number] = 1
        cols[j][number] = 1

        let x = parseInt(j / 3)
        let y = parseInt(i / 3)
        let boxIndex = y * 3 + x
        boxes[boxIndex][number] = 1
      }
    }
  }
  fillNumber(board, 0, 0)

  function fillNumber(board, x, y) {
    if (y === 9) return true
  
    let next_x = (x + 1) % 9
    let next_y = next_x === 0 ? y + 1 : y
    if (board[y][x] !== '.') {
      return fillNumber(board, next_x, next_y)
    }
    for (let i = 1; i <= 9; i++) {
      let bx = parseInt(x / 3)
      let by = parseInt(y / 3)
      let boxIndex = by * 3 + bx
      if (!rows[y][i] && !cols[x][i] && !boxes[boxIndex][i]) {
        rows[y][i] = 1
        cols[x][i] = 1
        boxes[boxIndex][i] = 1
        board[y][x] = String(i)
        if (fillNumber(board, next_x, next_y)) return true
        board[y][x] = '.'
        cols[x][i] = 0
        rows[y][i] = 0
        boxes[boxIndex][i] = 0
      }
    }
    return false
  }
};


