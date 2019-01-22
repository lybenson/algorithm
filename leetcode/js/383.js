/**
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = new Map()
  for (let i = 0; i < magazine.length; i++) {
    let c = magazine[i]
    if (map.get(c) > 0) {
      map.set(c, map.get(c) + 1)
    } else {
      map.set(c) = 1
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    let c = ransomNote[i]
    if (map.get(c) > 0) {
      map.set(c, map.get(c) - 1)
    } else {
      return false
    }
  }
  return true
};