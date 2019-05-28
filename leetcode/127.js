/**
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordListSet = new Set(wordList)
  if (!wordListSet.has(endWord)) return 0

  let queue = []
  queue.push(beginWord)

  let len = beginWord.length
  let step = 0

  while (queue.length > 0) {
    ++step
    for (let size = queue.length; size > 0; size--) {
      let wordArray = Array.from(queue.shift())
      for (let i = 0; i < len; i++) {
        let char = wordArray[i]
        for (let j = 0; j <= 25; j++) {
          let cur = String.fromCharCode(65 + j).toLowerCase()
          // console.log(cur)
          if (cur === char) continue
          wordArray[i] = cur
          let wordString = wordArray.join('')
          if (wordString === endWord) return step + 1
          if (!wordListSet.has(wordString)) continue
          wordListSet.delete(wordString)
          queue.push(wordString)
        }
        wordArray[i] = char
      }
    }
  }
  return 0
};
