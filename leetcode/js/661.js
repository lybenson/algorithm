/**
 * 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let n = M.length
  let m = M[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let sums = 0
      let cnt = 0
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          let nx = i + dx
          let ny = j + dy
          if (nx < 0 || ny < 0 || nx === n || ny === m) {
            continue
          }
          cnt++
          sums += (M[nx][ny] & 255)
        }
      }
      M[i][j] |= (~~(sums / cnt) << 8)
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      M[i][j] >>= 8      
    }
  }
  return M
};
