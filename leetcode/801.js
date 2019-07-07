/**
 * 我们有两个长度相等且不为空的整型数组 A 和 B 。

我们可以交换 A[i] 和 B[i] 的元素。注意这两个元素在各自的序列中应该处于相同的位置。

在交换过一些元素之后，数组 A 和 B 都应该是严格递增的（数组严格递增的条件仅为A[0] < A[1] < A[2] < ... < A[A.length - 1]）。

给定数组 A 和 B ，请返回使得两个数组均保持严格递增状态的最小交换次数。假设给定的输入总是有效的。
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  // two status: keep or swap
  let len = A.length
  let keep = new Array(len).fill(Number.MAX_VALUE)
  let swap = new Array(len).fill(Number.MAX_VALUE)
  keep[0] = 0
  swap[0] = 1
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
      keep[i] = keep[i - 1]
      swap[i] = swap[i - 1] + 1
    }
    if (B[i] > A[i - 1] && A[i] > B[i - 1]) {
      swap[i] = Math.min(swap[i], keep[i - 1] + 1)
      keep[i] = Math.min(keep[i], swap[i - 1])
    }
  }
  return Math.min(swap[swap.length - 1], keep[keep.length - 1])
};
