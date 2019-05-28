/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  digits += ''
  let arr = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let item = []
  for(let i = 0; i < digits.length; i++){
    let num = digits[i]
    if (item == '') item = arr[num]
    else {
      let list = []
      for(let j = 0; j < item.length; j++){
        for(let k = 0; k < arr[num].length; k++){
          list.push(item[j] + arr[num][k])
        }
      }
      item = list
    }
  }
  return item
}
