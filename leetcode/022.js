/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = []
  regression('', 0, 0)
  function regression (cur, left, right) {
    if (right === n) {
      ans.push(cur)
      return
    }
    if (left < n) regression(cur + '(', left + 1, right)
    if (right < left) regression(cur + ')', left, right + 1)
  }
};
