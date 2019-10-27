/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 */
/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
  // cols 表示某列是否可用, 每行只有一个 不考虑行
  // diagonal 某条正对角线是否可用
  // diagonal_reverse 某条反对角线是否可用
  let cols = new Array(n).fill(false)
  let diagonal = new Array(2 * n - 1).fill(false)
  let diagonal_reverse = new Array(2 * n - 1).fill(false)

  // 棋盘的值 'Q' or '.'
  let board = new Array(n).fill(null).map(() => new Array(n).fill('.'))

  let ans = []
  backtrack(n, 0)

  function valid (x, y, n) {
    return !cols[x] && !diagonal[x + y] && !diagonal_reverse[x - y + n - 1]
  }
  function updateBoard (x, y, n, is_put) {
    cols[x] = is_put
    diagonal[x + y] = is_put
    diagonal_reverse[x - y + n - 1] = is_put
    board[y][x] = is_put ? 'Q' : '.'
  }

  // y 表示行号
  function backtrack (n, y) {
    if (y === n) {
      let fake_board = []
      for (let i = 0; i < board.length; i++) {
        fake_board.push(board[i].join(''))
      }
      ans.push(fake_board)
      return
    }
    // 遍历列
    for (let x = 0; x < n; x++) {
      if (!valid(x, y, n)) continue
      updateBoard(x, y, n ,true)
      backtrack(n, y + 1)
      updateBoard(x, y, n, false)
    }
  }
  return ans
}
console.log(solveNQueens(8).length);
