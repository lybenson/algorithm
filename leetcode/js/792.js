/**
 * 给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数。
 */
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  let pos = {}

  for (let i = 0; i < S.length; i++) {
    let s = S[i]
    let v =  pos[s]
    if (v) {
      v.push(i)
      pos[s] = v
    } else {
      pos[s] = [i]
    }
  }
  let ans = 0
  words.forEach(word => {
    if (isMatch(word)) ans++
  })
  return ans

  function isMatch (word) {
    if (word.length == 0) return false
    let prev = -1
    for (let i = 0; i < word.length; i++) {
      let position = pos[word[i]]
      position = position.filter(p => {
        return p >= prev + 1
      })

      if (position.length > 0) {
        let index = position[0]
        prev = index
      } else {
        return false
      }
    }
    return true
  }
};

console.log(numMatchingSubseq('absss', ['bssssaaa']))
