/**
 * 如果数组是单调递增或单调递减的，那么它是单调的。

如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

当给定的数组 A 是单调数组时返回 true，否则返回 false。
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  if (A.length <= 2) return true
  let isUp
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      if (isUp === false) {
        return false
      }
      isUp = true
    } else if (A[i] < A[i - 1]) {
      if (isUp === true) {
        return false
      }
      isUp = false
    }
  }
  return true
};