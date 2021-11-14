/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if (!strs.length) return ''
//   let getMaxLength = function () {
//     return strs.reduce((pre, item) => {
//       return Math.min(pre, item.length)
//     }, Number.MAX_VALUE)
//   }
//   let len = getMaxLength()
//   let res = ''
//   for (let i = 0; i < len; i++) {
//     let c = strs[0][i]
//     let isSame = strs.every(function(item) {
//       return item[i] === c
//     })

//     if (!isSame) break
//     res += c
//   }
//   return res
// }
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return ''
  let ans = strs[0]

}
