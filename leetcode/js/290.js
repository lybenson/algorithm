/**
给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。

这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  str = str.split(' ')
  if (pattern.length !== str.length) return false

  let dict1 = {}
  let dict2 = {}
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i]
    if (!dict1[char]) {
      dict1[char] = str[i]
    } else {
      if (dict1[char] != str[i]) return false
    }
    if (!dict2[str[i]]) {
      dict2[str[i]] = char
    } else {
      if (dict2[str[i]] !== char)
        return false
    }
  }
  return true
};
