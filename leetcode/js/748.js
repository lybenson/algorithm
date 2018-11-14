/**
如果单词列表（words）中的一个单词包含牌照（licensePlate）中所有的字母，那么我们称之为完整词。在所有完整词中，最短的单词我们称之为最短完整词。

单词在匹配牌照中的字母时不区分大小写，比如牌照中的 "P" 依然可以匹配单词中的 "p" 字母。

我们保证一定存在一个最短完整词。当有多个单词都符合最短完整词的匹配条件时取单词列表中最靠前的一个。

牌照中可能包含多个相同的字符，比如说：对于牌照 "PP"，单词 "pair" 无法匹配，但是 "supper" 可以匹配。
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let lowS = licensePlate.replace(/[^a-z]/gi, '').toLowerCase().split('').sort()
  let lowSHash = {}
  lowS.forEach(s => {
    lowSHash[s] = lowSHash[s] ? ++lowSHash[s] : 1
  })
  let min = Number.MAX_VALUE
  let ans

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (word.length >= min) continue
    if (!matches(word)) continue
    min = word.length
    ans = word
  }
  return ans

  function matches (word) {
    let w = word.toLowerCase().split('').sort()
    let wHash = {}
    w.forEach(s => {
      wHash[s] = wHash[s] ? ++wHash[s] : 1
    })
    for (const char in lowSHash) {
      if (lowSHash[char] > (wHash[char] || 0)) return false
    }
    return true
  }
}
