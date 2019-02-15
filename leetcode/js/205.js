/**
 * 给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (!s || !t) return true

  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    let a = s[i]
    let b = t[i]
    if (map.has(a)) {
      if (map.get(a) === b) continue
      else return false
    } else {
      if (Array.from(map.values()).indexOf(b) === -1) {
        map.set(a, b)
      } else return false
    }
  }
  return true
};
