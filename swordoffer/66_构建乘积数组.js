/**
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 */
/**
 * @param {number[]} a [1,2,3,4,5]
 * @return {number[]}
 */
var constructArr = function(a) {
  let leftDP = [1]
  let rightDP = []

  let len = a.length
  for (let i = 1; i < len; i++) {
    leftDP[i] = leftDP[i - 1] * a[i - 1]
  }
}
