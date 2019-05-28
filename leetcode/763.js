/**
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  // 建立字母和其最后出现位置的映射
  let len = S.length
  let hash = {}
  for (let i = 0; i < len; i++) {
    hash[S[i]] = i    
  }

  let res = []
  let start = 0
  let end = 0
  for (let j = 0; j < len; j++) {
    end = Math.max(end, hash[S[j]])
    if (end == j) {
      res.push(j - start + 1)
      start = j + 1
    }
  }
  return res
};
console.log(partitionLabels('ababcbacadefegdehijhklij'))
