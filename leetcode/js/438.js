/**
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const { length: m } = s
  const { length: n } = p

  const ans = []

  const diff = new Map()
  for (const ch of p) diff.set(ch, (diff.get(ch) | 0) - 1)
  
  for (let i = 0; i < m; i += 1) {
    const added = s[i]

    if (diff.get(added) === -1) {
      diff.delete(added)
    } else {
      diff.set(added, (diff.get(added) | 0) + 1)
    }

    if (i >= n) {
      const removed = s[i - n]
      if (diff.get(removed) === 1) {
        diff.delete(removed)
      } else {
        diff.set(removed, (diff.get(removed) | 0) - 1)
      }
    }

    if (diff.size === 0) ans.push(i - n + 1)
  }

  return ans
};

findAnagrams('cbaebabacd', 'abca')
