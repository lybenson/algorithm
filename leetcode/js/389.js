/**
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  // 同一个值和另一个相同的值异或两次结果为其本身
  // 任意值和0异或都为其本身

  let tlen = t.length
  let slen = s.length
  let ret = 0
  for(let i = 0; i < slen; i++){
      ret ^= s.charCodeAt(i)
  }
  for(let j = 0; j < tlen; j++){
    ret ^= t.charCodeAt(j)
  }
  return String.fromCharCode(ret)
}
