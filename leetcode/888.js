/**
爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。

因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

如果有多个答案，你可以返回其中任何一个。保证答案存在。
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sumA = A.reduce((prev, cur, idx, arr) => {
    return prev + cur
  }, 0)
  let sumB = B.reduce((prev, cur, idx, arr) => {
    return prev + cur
  }, 0)

  let map = new Map()
  B.forEach((v) => {
    map.set(v, 1)
  })

  // x, y
  // sumA - x + y = sumB - y + x
  // y = (sumB - sumA + 2x) / 2\

  let ans = []
  for (let i = 0; i < A.length; i++) {
    let x = A[i]
    let y = (sumB - sumA + 2 * x) / 2
    if (map.has(y)) {
      ans = [x, y]
      break
    }
  }
  return ans
};
fairCandySwap([1,1], [2, 2])
