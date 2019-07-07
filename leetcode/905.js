/**
给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，后面跟 A 的所有奇数元素。

你可以返回满足此条件的任何数组作为答案。
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let ans = []
  A.forEach(v => {
    if (v % 2) {
      ans.push(v)
    } else {
      ans.unshift(v)
    }
  })
  return ans
};
