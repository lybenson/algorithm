/**
 * 有一个由小写字母组成的字符串 S，和一个整数数组 shifts。

我们将字母表中的下一个字母称为原字母的 移位（由于字母表是环绕的， 'z' 将会变成 'a'）。

例如·，shift('a') = 'b'， shift('t') = 'u',， 以及 shift('z') = 'a'。

对于每个 shifts[i] = x ， 我们会将 S 中的前 i+1 个字母移位 x 次。

返回将所有这些移位都应用到 S 后最终得到的字符串。
 */

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let AS = S.split('')
  let ans = []
  let c = 0
  for (let i = shifts.length - 1; i >= 0; --i) {
    c += (shifts[i] % 26)
    ans[i] = String.fromCharCode((AS[i].charCodeAt() - 'a'.charCodeAt() + c) % 26 + 'a'.charCodeAt())
  }
  return ans.join('')
}
