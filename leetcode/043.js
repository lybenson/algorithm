/**
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 解法一
// var multiply = function(num1, num2) {
//   if (num1 === '0' || num2 === '0') return '0'
//   let m = num1.length
//   let n = num2.length

//   let ans = '0'
//   for (let i = n - 1; i >= 0; i--) {
//     let curr = ''
//     let add = 0
//     for (let j = n - 1; j > i; j--) {
//       curr += '0'
//     }
//     let y = Number(num2[i])
//     for (let j = m - 1; j >= 0; j--) {
//       let x = Number(num1[j])
//       let result = x * y + add
//       curr += (result % 10)
//       add = Math.floor(result / 10)
//     }
//     if (add !== 0) {
//       curr += (add % 10)
//     }
//     console.log(curr.split('').reverse().join(''))
//     ans = addStrings(ans, curr.split('').reverse().join(''))
//     // console.log(curr);
//   }
//   console.log(ans);
// };

// var addStrings = function(num1, num2) {
//   let len1 = num1.length
//   let len2 = num2.length

//   let ans = ''
//   let carry = 0
//   while (len1 > 0 || len2 > 0) {
//     let sum = (+num1[--len1] || 0) + (+num2[--len2] || 0) + carry
//     ans = (sum % 10) + '' + ans
//     carry = Math.floor(sum / 10)
//   }
//   if (carry) ans = '1' + ans
//   return ans
// };

// 解法二
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let m = num1.length
  let n = num2.length

  let ansArray = new Array(m + n).fill(0)
  for (let i = m - 1; i >= 0; i--) {
    const x = num1[i] - 0
    for (let j = n - 1; j >= 0; j--) {
      let y = num2[j] - 0
      ansArray[i + j + 1] +=  x * y
    }
  }
  console.log(ansArray);
  for (let i = m + n - 1; i > 0; i--) {
    ansArray[i - 1] += parseInt(ansArray[i] / 10)
    ansArray[i] = ansArray[i] % 10
  }
  return  ansArray[0] === 0 ? ansArray.slice(1, ansArray.length).join('') : ansArray.join('')
};

multiply('1234', '567')
