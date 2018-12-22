/**
给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return
 *  + {number}
 */
var minDistance = function(word1, word2) {
  let l1 = word1.length
  let l2 = word2.length
  let d = []

  return dp(word1, word2, l1, l2)

  function dp (word1, word2, l1, l2) {
    if (l1 === 0) return l2
    if (l2 === 0) return l1

    if (d[l1] && d[l1][l2]) return d[l1][l2]

    let ans = -1

    if (word1[l1 - 1] === word2[l2 - 1]) {
      ans = dp(word1, word2, l1 - 1, l2 - 1)
    } else {
      ans = Math.min(dp(word1, word2, l1 - 1, l2 - 1), dp(word1, word2, l1 - 1, l2),  dp(word1, word2, l1, l2 - 1)) + 1
    }
    d[l1] = !d[l1] ? [] : d[l1]
    return d[l1][l2] = ans
  }
}

console.log(minDistance('ab', 'a'))
