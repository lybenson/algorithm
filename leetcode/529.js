/**
 * 扫雷游戏
 */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  let x = click[0]
  let y = click[1]

  let m = board.length
  let n = board[0].length

  let dx = [-1, -1, -1, 0, 0, 1, 1, 1]
  let dy = [-1, 0, 1, -1, 1, -1, 0, 1]

  if (board[x][y] === 'M') {
    board[x][y] = 'X'
  } else {
    dfs(board, x, y)
  }

  return board

  function dfs(board, x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'E') {
      return
    }
    let num = getRoundBombNum(board, x, y)

    if (num === 0) {
      board[x][y] = 'B'
      for (let i = 0; i < 8; i++) {
        dfs(board, x + dx[i], y + dy[i])
      }
    } else {
      board[x][y] = String(num)
    }
  }

  function getRoundBombNum (board, x, y) {
    let num = 0
    for (let i = 0; i < 8; i++) {
      let newX = x + dx[i]
      let newY = y + dy[i]
      if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
        continue
      }
      if (board[newX][newY] === 'M' || board[newX][newY] === 'X') {
        num++
      }
    }
    return num
  }
}

