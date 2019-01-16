/**
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let odd = []
  let even = []
  A.forEach(v => {
    if (v % 2) {
      odd.push(v)
    } else {
      even.push(v)
    }
  })
  let ans = []
  even.forEach((v, index) => {
    ans.push(v)
    ans.push(odd[index])
  })
  return ans
};