/**
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  let keys = [...map.keys()]
  keys.sort((a, b) => map.get(b) - map.get(a))
  let ans = ''
  for (let i = 0; i < keys.length; i++) {
    let frequence = map.get(keys[i])
    for (let j = 0; j < frequence; j++) {
      ans += keys[i]
    }
  }
  return ans
};
