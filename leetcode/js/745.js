/**
 * 给定多个 words，words[i] 的权重为 i 。

设计一个类 WordFilter 实现函数WordFilter.f(String prefix, String suffix)。这个函数将返回具有前缀 prefix 和后缀suffix 的词的最大权重。如果没有这样的词，返回 -1。
 */
/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  let filters = {}
  words.forEach((word, index) => {
    let prefixes = ['']
    let suffixes = ['']
    let wordArr = word.split('')
    let len = wordArr.length
    for (let i = 0; i < len; i++) {
      prefixes[i + 1] = prefixes[i] + wordArr[i]
      suffixes[i + 1] = wordArr[len - i - 1] + suffixes[i]
    }

    console.log(prefixes)
    console.log(suffixes)
    console.log('-----=======' + prefixes.length)
    for (let i = 0; i < prefixes.length; i++) {
      for (let j = 0; j < suffixes.length; j++) {
        filters[prefixes[i] + '_' + suffixes[j]] = index
      }
    }
  })

  return filters
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
  const pattern_key = prefix + '_' + suffix
  if (filters.indexOf(pattern_key) > -1) {
    
  }
};

console.log(WordFilter(['apple']))
