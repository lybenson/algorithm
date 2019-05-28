/**
 * 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase().split(/[!?',;. ]+/)
  let map = new Map()
  for(let i = 0, word; i < paragraph.length; i++){
      word = paragraph[i]
      if (banned.indexOf(word) > -1) continue
      map.set(word, map.has(word) ? map.get(word) + 1 : 1)
  }
  let max = 0
  let ans = ''
  map.forEach((value, key) => {
    if (value > max) {
      max = value
      ans = key
    }
  })
  return ans
};
