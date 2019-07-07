/**
给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

1. 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
2. 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
3. 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
4. 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let m = board.length
  let n = m ? board[0].length : 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let lives = 0
      for (let y = Math.max(0, i - 1); y < Math.min(m, i + 2); y++) {
        for (let x = Math.max(0, j - 1); x < Math.min(n, j + 2); x++) {
          lives += board[y][x] & 1
        }
      }
      if (lives == 3 || lives - board[i][j] == 3) {
        board[i][j] |= 0b10
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1
    }
  }
};
