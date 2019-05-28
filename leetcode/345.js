/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = 'aeiouAEIOU'
  s = s.split('')
  let len = s.length

  let vowelArray = []
  for (let i = 0; i < len; i++) {
    if (vowels.indexOf(s[i]) !== -1) vowelArray.push(s[i])
  }
  vowelArray.reverse()
  let ans = ''
  let index = 0

  for (let i = 0; i < len; i++) {
    if (vowels.indexOf(s[i]) !== -1) ans += vowelArray[index++]
    else ans += s[i]
  }
  return ans
};