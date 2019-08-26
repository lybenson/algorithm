/**
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 */
/**
 * @param {string} s
 * @return {number}
 */

// Solution1: Stack
// var longestValidParentheses = function(s) {
//   let stack = [0]
//   let longest = 0
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]
//     if (char === '(') {
//       stack.push(0)
//     } else {
//       if (stack.length > 1) {
//         let value = stack.pop()
//         stack[stack.length - 1] += value + 2
//         longest = Math.max(longest, stack[stack.length - 1])
//       } else {
//         stack = [0]
//       }
//     }
//   }
//   return longest
// };

// Solution2: DP
var longestValidParentheses = function(s) {
  let len = s.length
  let longest = 0
  let dp = new Array(len + 1).fill(0)
  for (let i = 1; i <= len + 1; i++) {
    if (s[i - 1] === '(') continue

    let left_bracket = i - 2 - dp[i - 1]
    if (left_bracket >= 0 && s[left_bracket] === '(') {
      dp[i] = dp[i - 1] + 2

      if (dp[i - dp[i]]) {
        dp[i] += dp[i - dp[i]]
      }
      longest = Math.max(dp[i], longest)
    }
  }
  return longest
};