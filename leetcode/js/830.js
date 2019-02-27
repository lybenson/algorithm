/**
 * 在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。

例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。

最终结果按照字典顺序输出。
 */
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  S += ' '
  let start = 0
  let count = 0
  let current = S[start]
  let ans = []
  for (let i = 1; i < S.length; i++) {
    const char = S[i]
    if (char === current) {
      count++
    } else {
      current = char
      if (count >= 2) {
        ans.push([start, i - 1])
      }
      start = i
      count = 0
    }
  }
  return ans
};