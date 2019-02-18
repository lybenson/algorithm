/**
 * 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let times = 1
  let sArray = s.split('')
  let len = sArray.length
  for (let i = 0; i < len;) {
    let j = Math.min(len, times * 2 * k)
    let distance = j - i
    if (distance < k) {
      reverse(i, j - 1)
    } else {
      reverse(i, i + k - 1)
    }
    times++
    i = j
  }

  function reverse (start, end) {
    while (start < end) {
      let temp = sArray[start]
      sArray[start] = sArray[end]
      sArray[end] = temp
      start++
      end--
    }
  }

  return sArray.join('')
};
