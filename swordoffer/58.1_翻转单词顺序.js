/**
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let start = 0
  let end = 0

  while(start < nums.length) {
    if (nums[end] & 1) {

      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
    }
    end++
  }

  return nums
};
