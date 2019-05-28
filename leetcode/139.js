/**
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length
  s = ' ' + s
  let f = new Array(len + 1).fill(0)
  f[0] = 1

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= i; j++) {
      if (f[j] == 1) {
        let new_s = s.substr(j + 1, i - j) // s[j+1...i]
        if (wordDict.indexOf(new_s) > -1) {
          f[i] = 1
          break
        }
      }
    }
  }
  return f[len]
}

wordBreak('leetcode', ['leet', 'code'])
